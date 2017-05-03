package com.unique.service;

import com.unique.bo.ReturnObject;
import com.unique.bo.UserLoginInfo;
import com.unique.po.TbUserInfoPO;

/**
 * Created by nan on 2017/4/13.
 */
public interface LonginService {

    public ReturnObject<TbUserInfoPO> checkUserInfo(UserLoginInfo userLoginInfo);
}
