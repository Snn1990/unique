package com.unique.dao.dao_init;

import com.unique.po.UserBwlTitleListPO;

public interface UserBwlTitleListDAO {
    int deleteByPrimaryKey(Integer id);

    int insert(UserBwlTitleListPO record);

    int insertSelective(UserBwlTitleListPO record);

    UserBwlTitleListPO selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserBwlTitleListPO record);

    int updateByPrimaryKey(UserBwlTitleListPO record);
}