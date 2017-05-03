package com.unique.filter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.web.context.ServletContextAware;

import javax.servlet.ServletContext;

/**
 * 加載全局參數使用
 * 
 * @ClassName: InitConfig
 * @author: zhangzl
 * @date: 2016年8月9日 上午9:29:46
 */
@Component
public class InitConfig implements ApplicationListener,ServletContextAware {


	@Value("${domainUrl}")
	String domainUrl;


	@Override
	public void onApplicationEvent(ApplicationEvent event) {

	}

	@Override
	public void setServletContext(ServletContext servletContext) {
		servletContext.setAttribute("domainUrl",domainUrl);
	}
}
