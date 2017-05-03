package com.unique.controller;

import com.unique.bo.ReturnObject;
import com.unique.bo.UserLoginInfo;
import com.unique.service.TableInfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

/**
 * Created by nan on 2017/4/25.
 */
@Controller
@RequestMapping("table")
public class TableInfoController {

    private final static Logger logger = LoggerFactory.getLogger(TableInfoController.class);
    @Autowired
    private TableInfoService tableInfoService;
    /**
     * 获取table信息，按照用户ID获取
     * @param data
     * @param session
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "getTableInfo", method = RequestMethod.POST)
    public ReturnObject test(String data, HttpSession session){
        ReturnObject<String> returnObject = new ReturnObject<>();
        UserLoginInfo userLoginInfo = (UserLoginInfo)session.getAttribute("userInfo");

        if(userLoginInfo != null ){
            returnObject.setData(tableInfoService.getAllInfo(userLoginInfo));
        }else{
            returnObject.setStatus("err");
            returnObject.setMsg("用户登录信息超时");
        }
        logger.debug(returnObject.toString());
        return returnObject;
    }
}
