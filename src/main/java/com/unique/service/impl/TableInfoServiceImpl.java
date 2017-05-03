package com.unique.service.impl;

import com.alibaba.fastjson.JSON;
import com.unique.bo.ReturnObject;
import com.unique.bo.UserLoginInfo;
import com.unique.dao.TbTableInfoDAO;
import com.unique.po.TbTableInfoPO;
import com.unique.service.TableInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by nan on 2017/4/25.
 */
@Service("TableInfoService")
public class TableInfoServiceImpl implements TableInfoService {

    @Autowired
    TbTableInfoDAO tbTableInfoDAO;

    @Override
    public String getAllInfo(UserLoginInfo userLoginInfo) {
        List<TbTableInfoPO> tableInfoPOList = tbTableInfoDAO.selectByUserId(userLoginInfo.getId());
        String str = JSON.toJSONString(tableInfoPOList);
        return str;
    }
}
