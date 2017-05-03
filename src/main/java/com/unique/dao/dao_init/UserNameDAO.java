package com.unique.dao.dao_init;

import com.unique.po.UserNamePO;

public interface UserNameDAO {
    int deleteByPrimaryKey(Integer id);

    int insert(UserNamePO record);

    int insertSelective(UserNamePO record);

    UserNamePO selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserNamePO record);

    int updateByPrimaryKey(UserNamePO record);
}