package com.unique.aop;


import com.unique.bo.ReturnObject;
import com.unique.utils.HtmlUtil;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

/**
 * Created by nan on 2017/4/10.
 */
@Component
@Aspect
public class ExceptionAdvisor {

    private final static Logger logger = LoggerFactory.getLogger(ExceptionAdvisor.class);

    @Pointcut("execution(* com.unique.controller.*.*(..))")
    private void anyMethod() {
    }//定义一个切入点

    @Around("anyMethod()")
    public Object doBasicProfiling(ProceedingJoinPoint pjp) throws Throwable {
        MethodSignature methodSignature = (MethodSignature) pjp.getSignature();
        Method method = methodSignature.getMethod();
        Class<?> objClass = method.getReturnType();
        Class<?>[] obgList = method.getParameterTypes();
        Object object = null;
        logger.info("AOP事务开始...");
	
        logger.info("本次调用方法名为：" + method.getName());
        for (Class<?> clas : obgList) {
            logger.info("参数类型为:" + clas);
        }
        //访问目标方法的参数校验：
        long starTime = System.currentTimeMillis();
        Object[] args = pjp.getArgs();
        for (int i = 0; i < args.length; i++) {
            //System.out.println(args[i]); //输出传入的参数
            //增加参数的校验
            //ResultData result = ResultData.build();

            if (args[i] instanceof String) {
                String str = args[i].toString();
                long lenth = args[i].toString().length();

                if (!HtmlUtil.delHTMLTag(str)) {
                    logger.info("aop参数【" + args[i] + "】的长度为【" + lenth + "】存在非法字符校验不通过");
                    logger.info("AOP事务结束...");
                    Long endTime = System.currentTimeMillis();
                    logger.info("\n开始时间:" + starTime + "\n结束时间:" + endTime + "\n执行时间:" + (endTime - starTime));
                    return "faild";
                }

                logger.info("aop参数【" + args[i] + "】的长度为【" + lenth + "}校验通过");
            }

        }


        try {
            object = pjp.proceed();
            //this.putCodeToRsp(object,"0","操作成功！");
            logger.info("AOP事务正常结束...");
            long endTime = System.currentTimeMillis();
            logger.info("\n开始时间:" + starTime + "\n结束时间:" + endTime + "\n执行时间:" + (endTime - starTime));
            return object;
        } catch (ResourceExcept e) {
            logger.error("自定义异常 : " + e.getMsgCode());
            object = objClass.newInstance();
            this.putCodeToRsp(object, e.getMsgCode(), e.getMsg());
        } catch (Throwable e) {
            logger.error("系统异常  ", e);
            object = objClass.newInstance();
            //this.putCodeToRsp(object,"0","系统异常！");
        }
        logger.info("AOP事务结束...");
        Long endTime = System.currentTimeMillis();
        logger.info("\n开始时间:" + starTime + "\n结束时间:" + endTime + "\n执行时间:" + (endTime - starTime));
        return object;
    }

    private void putCodeToRsp(Object object, String code, String msg) throws NoSuchFieldException, SecurityException, IllegalArgumentException, IllegalAccessException {
        if (object instanceof ReturnObject) {
            logger.debug("进入自定义异常的返回值重置 code=" + code + ",msg = " + msg);
            Field field = ReturnObject.class.getDeclaredField("status");
            field.set(object, code);
            field = ReturnObject.class.getDeclaredField("msg");
            field.setAccessible(true);
            field.set(object, msg);
        }
    }
}
