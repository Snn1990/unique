package com.unique.service.impl;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.unique.service.HttpService;
import com.payease.sandbox.common.utils.HttpClients;
/**
 * Created by nan on 2017/4/19.
 */
public class HttpServiceImpl implements HttpService {
    @Override
    public String httpPost(String url, String data) {
        try {
            HttpClients.httpClientPost(url,data);
        } catch (UnirestException e) {
            e.printStackTrace();
        }
        return null;
    }
}
