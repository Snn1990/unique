package com.unique.utils;

import org.apache.commons.lang.StringUtils;

/**
 * Created by nan on 2017/4/10.
 */
public class HtmlUtil {

    public static boolean delHTMLTag(String htmlStr) {
        if(!StringUtils.isNotBlank(htmlStr)){
            return true;
        }
        String str = htmlStr.toLowerCase();
        htmlStr = htmlStr.toLowerCase();
        htmlStr = htmlStr.replaceAll("<","& lt;").replaceAll(">","& gt;");
        htmlStr = htmlStr.replaceAll("\\(","& #40;").replaceAll("\\)","& #41;");
        htmlStr = htmlStr.replaceAll("'","& #39;");
        htmlStr = htmlStr.replaceAll("eval\\((.*)\\)","");
        htmlStr = htmlStr.replaceAll("[\\\"\\\'][\\s]*javascript:(.*)[\\\"\\\']","\"\"");
        htmlStr = htmlStr.replaceAll("script","");
        return str.equals(htmlStr);
    }


    public static void main(String[] args) {
        System.out.println("test begin");
        //String str = "<div style='text-align:center;'> 整治“四风”   清弊除垢<br/><span style='font-size:14px;'> </span><span style='font-size:18px;'>公司召开党的群众路线教育实践活动动员大会</span><br/></div>";
        String str ="1245555";
        System.out.println(delHTMLTag(str));
        System.out.println("test end");
    }
}
