package com.unique.dao.dao_init;

import com.unique.po.TbUserInfoPO;

public interface TbUserInfoDAO {
    int deleteByPrimaryKey(Integer id);

    int insert(TbUserInfoPO record);

    int insertSelective(TbUserInfoPO record);

    TbUserInfoPO selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TbUserInfoPO record);

    int updateByPrimaryKey(TbUserInfoPO record);
}