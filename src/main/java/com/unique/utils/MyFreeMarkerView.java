package com.unique.utils;

/**
 * Created by niufenjava on 2017/3/21.
 */
import org.springframework.web.servlet.view.freemarker.FreeMarkerView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

public class MyFreeMarkerView extends FreeMarkerView {

    private static final String CONTEXT_PATH = "base";
    private static final String PORTAL_CONTEXT_PATH = "portal_base";
    private static final String PORTAL_NAME = "";

   @Override
    protected void exposeHelpers(Map<String, Object> model, HttpServletRequest request) throws Exception {
        model.put(CONTEXT_PATH, request.getContextPath());
        model.put(PORTAL_CONTEXT_PATH, request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+"/"+PORTAL_NAME);
        super.exposeHelpers(model, request);
    }
}