package com.unique.filter;

import com.unique.bo.UserLoginInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by zhangzhili on 2017/3/22.
 */
public class LoginInterceptor extends HttpServlet implements HandlerInterceptor {

    private final static Logger logger = LoggerFactory.getLogger(LoginInterceptor.class);
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        response.setContentType("text/html; charset=UTF-8");
        logger.debug("安全登录拦截Begin");
        boolean flag = false;
        String domainUrl = request.getServletContext()
                .getAttribute("domainUrl").toString();
        UserLoginInfo userBean =  (UserLoginInfo) request.getSession().getAttribute("userInfo");
        if (userBean!=null  ) {
            logger.debug("用户【"+userBean.getUser()+"】已经登录");
            flag = true;
        } else {
            logger.debug("用户未登录，重定向到登录页面");
//            if(isAjaxRequest(request,handler)){
//                PrintWriter w = response.getWriter();
//                ReturnObject<String> r = new ReturnObject<String>();
//                r.setMsg("登录超时");
//                r.setStatus("faild");
//                w.print(new Gson().toJson(r).toString());
//                return flag;
//            }
            System.out.println(domainUrl+"/unique/index.html");
            response.sendRedirect(domainUrl+"/unique/index.html");
        }
        return flag;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }











    private boolean isAjaxRequest(HttpServletRequest req, Object handler) {
        // if (req.getHeader("x-requested-with") != null
        // && req.getHeader("x-requested-with").equalsIgnoreCase(
        // "XMLHttpRequest")) {
        // return true;
        // }
        // return false;
        if (handler instanceof HandlerMethod) {
            HandlerMethod mothod = (HandlerMethod) handler;
            ResponseBody annotation = mothod
                    .getMethodAnnotation(ResponseBody.class);
            if (annotation != null) {
                return true;
            } else {
                return false;
            }
        }
        if (req.getHeader("x-requested-with") != null
                && req.getHeader("x-requested-with").equalsIgnoreCase(
                "XMLHttpRequest")) {
            return true;
        }
        return false;
    }
}
