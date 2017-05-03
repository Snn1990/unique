package com.unique.service.impl;

import com.unique.bo.ReturnObject;
import com.unique.bo.UserLoginInfo;
import com.unique.dao.TbUserInfoDAO;
import com.unique.po.TbUserInfoPO;
import com.unique.service.LonginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by nan on 2017/4/13.
 */
@Service("LonginService")
public class LonginServiceImpl implements LonginService {
    private final static Logger logger = LoggerFactory.getLogger(LonginServiceImpl.class);

    @Autowired
    public TbUserInfoDAO tbUserInfoDAO;
    @Override
    public ReturnObject<TbUserInfoPO> checkUserInfo(UserLoginInfo userLoginInfo) {

        TbUserInfoPO tbUserInfoPO = new TbUserInfoPO();
        ReturnObject<TbUserInfoPO> returnObject = new ReturnObject<TbUserInfoPO>();
        returnObject.setStatus("success");
        returnObject.setMsg("success");
        //tbUserInfoDAO.selectByPrimaryKey(1);
        logger.debug("开始查询user信息");
        if(userLoginInfo != null){
            tbUserInfoPO =tbUserInfoDAO.selectByUser(userLoginInfo.getUser());
            if(tbUserInfoPO != null){
                logger.debug(tbUserInfoPO.toString());
                if(!tbUserInfoPO.getPasswd().equals(userLoginInfo.getPasswd())){
                    returnObject.setStatus("faild");
                    returnObject.setMsg("密码错误");
                }
            }else{
                returnObject.setStatus("faild");
                returnObject.setMsg("用户不存在");
            }
        }
        returnObject.setData(tbUserInfoPO);
        logger.debug("查询结束");
        return returnObject;
    }

    public TbUserInfoDAO getTbUserInfoDAO() {
        return tbUserInfoDAO;
    }
}
