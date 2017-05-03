package com.unique.controller;


import com.unique.bo.ReturnObject;
import com.unique.bo.UserLoginInfo;
import com.unique.po.TbUserInfoPO;
import com.unique.service.LonginService;
import com.unique.utils.VerifyCodeUtils;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
/**
 * Created by zhangzhili on 2017/3/21.
 */
@Controller
@RequestMapping("")
public class LoginController extends BaseController {

    private final static Logger logger = LoggerFactory.getLogger(LoginController.class);

    @Autowired
    public LonginService loginService;

    @Value("${urlI18n}")
    String urlI18n;
    @Value("${cardno}")
    String cardNo;
    @Value("${redirect}")
    String redirectUrl;

//    @RequestMapping("index")
//    public String index(HttpServletRequest request,Model model){
//        String domainUrl = request.getServletContext()
//                .getAttribute("domainUrl").toString();
//        model.addAttribute("url",domainUrl);
//        return "index";
//    }
    @ResponseBody
    @RequestMapping(value = "userInfo", method = RequestMethod.GET)
    public ReturnObject getUserInfo(HttpSession session){
        ReturnObject returnObject = new ReturnObject<String>();
        UserLoginInfo userLoginInfo = (UserLoginInfo)session.getAttribute("userInfo");
        if(userLoginInfo != null){
            returnObject.setStatus("success");
            returnObject.setMsg(userLoginInfo.getUserName());
            returnObject.setData(userLoginInfo.getUserName());
        }else{
            returnObject.setStatus("faild");
            returnObject.setMsg("登录超时");
        }
        return returnObject;
    }

    @ResponseBody
    @RequestMapping(value = "img", method = RequestMethod.GET)
    public void getVerifyCodeUtils(HttpServletRequest request, HttpServletResponse response){
        logger.info("begin img");
        response.setHeader("Pragma", "No-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0);
        response.setContentType("image/jpeg");

        //生成随机字串
        String verifyCode = VerifyCodeUtils.generateVerifyCode(4);
        //存入会话session
        HttpSession session = request.getSession(true);
        session.setAttribute("imgrand", verifyCode.toLowerCase());
        //生成图片
        int w = 200, h = 80;
        try {
            logger.info("生成图片begin");
            VerifyCodeUtils.outputImage(w, h, response.getOutputStream(), verifyCode);
            logger.info("生成图片 end 并写入输出流");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 登录接口
     *
     * @param accountNo
     * @param session
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "login", method = RequestMethod.POST)
    public ReturnObject login(String accountNo ,String password,String imgCode,HttpSession session) {
        //add 验证码校验
        ReturnObject<TbUserInfoPO>  returnObject= new ReturnObject<TbUserInfoPO>();
        logger.info("login begin");
        logger.debug("accountNo = " +accountNo );
        logger.debug("password = " +password );
        logger.debug("imgCode = " +imgCode );
        logger.debug("session imgrand = "+ session.getAttribute("imgrand"));
        if( session.getAttribute("imgrand") != null &&  StringUtils.isNotBlank(imgCode)){
            if(!session.getAttribute("imgrand").equals(imgCode.toLowerCase())){
                //验证码校验 失败
                //throw new ResourceExcept("faild","验证码校验失败");
                returnObject.setMsg("验证码错误");
                returnObject.setStatus("faild");
                return returnObject;
            }
        }else{
            //验证码校验 失败
            returnObject.setMsg("验证码错误");
            returnObject.setStatus("faild");
            return returnObject;
        }
        UserLoginInfo userLoginInfo = new UserLoginInfo();
        userLoginInfo.setPasswd(password);
        userLoginInfo.setUser(accountNo);
        returnObject = loginService.checkUserInfo(userLoginInfo);
        TbUserInfoPO tbUserInfoPO = returnObject.getData();
        userLoginInfo.setId(tbUserInfoPO.getId());
        userLoginInfo.setUserName(tbUserInfoPO.getUserName());
        userLoginInfo.setUrl(tbUserInfoPO.getUrl());
        session.setAttribute("userInfo",userLoginInfo);
        logger.debug(userLoginInfo.toString());
        logger.info("login end");
        return returnObject;
    }



}
