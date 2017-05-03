package com.unique.dao;

import com.unique.po.UserBwlTitleListPO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserBwlTitleListDAO {
    int deleteByPrimaryKey(Integer id);

    int insert(UserBwlTitleListPO record);

    int insertSelective(UserBwlTitleListPO record);

    UserBwlTitleListPO selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserBwlTitleListPO record);

    int updateByPrimaryKey(UserBwlTitleListPO record);

    List<UserBwlTitleListPO> selectByUserId(@Param("userId") Integer userId);
}