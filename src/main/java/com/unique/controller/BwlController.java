package com.unique.controller;

import com.unique.bo.ReturnObject;
import com.unique.bo.UserLoginInfo;
import com.unique.po.UserBwlListPO;
import com.unique.po.UserBwlTitleListPO;
import com.unique.service.BwlService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;

/**
 * Created by nan on 2017/4/17.
 * 备忘录相关操作的控制层
 */
@Controller
@RequestMapping("")
public class BwlController {
    private final static Logger logger = LoggerFactory.getLogger(BwlController.class);
    /**
     * 备忘录信息服务接口注入
     */
    @Autowired
    public BwlService bwlService;

    /**
     * 测试
     * @param data
     * @param session
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "test", method = RequestMethod.POST)
    public ReturnObject test(String data,HttpSession session){
        ReturnObject<String> returnObject = new ReturnObject<String>();
        logger.debug(data);
        returnObject.setData(data);
        return returnObject;
    }

    /**
     * 保存备忘录的title信息
     * @param request
     * @param session
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "saveBwlTitle", method = RequestMethod.POST)
    public ReturnObject saveBwlTitle(HttpServletRequest request,HttpSession session){
        logger.debug("保存备忘录标题begin");
        ReturnObject<String> returnObject = new ReturnObject<>();
        UserBwlTitleListPO userBwlTitleListPO = new UserBwlTitleListPO();
        UserLoginInfo userLoginInfo = (UserLoginInfo)session.getAttribute("userInfo");
        userBwlTitleListPO.setTitleText(request.getParameter("titleText"));
        userBwlTitleListPO.setUserId(userLoginInfo.getId());
        if(!bwlService.saveBwlTitleInfo(userBwlTitleListPO)){
            returnObject.setData("failed");
        }
        returnObject.setData("success");
        logger.debug("保存备忘录标题end");
        return returnObject;
    }

    /**
     * 删除备忘录的title信息
     * @param data
     * @param session
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "deleteBwlTitle", method = RequestMethod.POST)
    public ReturnObject deleteBwlTitle(String data,HttpSession session){
        ReturnObject<String> returnObject = new ReturnObject<String>();
        logger.debug(data);
        returnObject.setData(data);
        return returnObject;
    }

    /**
     * 新增备忘
     * @param session
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "saveBwlInfo", method = RequestMethod.POST)
    public ReturnObject saveBwlInfo(HttpSession session,HttpServletRequest request){
        String bwlTxt = request.getParameter("bwlTxt");
        Integer bwlTitleId = Integer.parseInt(request.getParameter("bwlTitleId"));

        logger.debug("bwlTxt="+bwlTxt);
        logger.debug("bwlTitleId="+bwlTitleId);
        UserLoginInfo userLoginInfo = (UserLoginInfo)session.getAttribute("userInfo");
        ReturnObject<String> returnObject = new ReturnObject<String>();

        UserBwlListPO infoReq = new UserBwlListPO();
        infoReq.setBwlTxt(bwlTxt);
        infoReq.setBwlTitleId(bwlTitleId);
        infoReq.setCreateTime(new Date());
        infoReq.setUserId(userLoginInfo.getId());
        //方式前端误传id
        infoReq.setId(null);

        bwlService.saveBwlInfo(infoReq);
        returnObject.setData("success");
        return returnObject;
    }

    /**
     * 查询备忘录信息
     * @param session
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "bwlInfoList", method = RequestMethod.POST)
    public ReturnObject getBwlInfoList(HttpSession session){
        ReturnObject returnObject = new ReturnObject<String>();
        UserLoginInfo userLoginInfo = (UserLoginInfo)session.getAttribute("userInfo");
        logger.debug("session中的用户信息为："+userLoginInfo.toString());
        if(userLoginInfo != null){
            returnObject.setStatus("success");
            returnObject.setMsg("success");
            returnObject.setData(userLoginInfo.getUser());
            logger.debug("当前的登录用户为【"+userLoginInfo.getUser()+"】");
            //查询当前用户的备忘录信息
            String jsonDataStr = bwlService.BwlList(userLoginInfo.getId());
            returnObject.setData(jsonDataStr);
        }else{
            returnObject.setStatus("faild");
            returnObject.setMsg("登录超时");
        }
        return returnObject;
    }
}
