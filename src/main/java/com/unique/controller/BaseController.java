package com.unique.controller;


import com.unique.bo.UserBean;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Created by zhangzhili on 2017/3/22.
 */
public class BaseController {


    /**
     * 获取用户信息
     * @param session
     * @return
     */
    public UserBean getUser(HttpSession session){
        return (UserBean) session.getAttribute("userBean");
    }

    @ExceptionHandler
    public String exception(HttpServletResponse response,HttpServletRequest request, Exception e) {
        //对异常进行判断做相应的处理
//        e.printStackTrace();
//        if(e instanceof TokenTimeoutException){
//            String domainUrl = request.getServletContext()
//                    .getAttribute("domainUrl").toString();
//            return "redirect:"+domainUrl+"/back/index";
//        }else if(e instanceof IllegalArgumentException){
//            return "500";
//        }else{
//            return "500";
//        }
        return null;
    }

}
