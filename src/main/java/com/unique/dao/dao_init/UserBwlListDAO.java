package com.unique.dao.dao_init;

import com.unique.po.UserBwlListPO;

public interface UserBwlListDAO {
    int deleteByPrimaryKey(Integer id);

    int insert(UserBwlListPO record);

    int insertSelective(UserBwlListPO record);

    UserBwlListPO selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserBwlListPO record);

    int updateByPrimaryKey(UserBwlListPO record);
}