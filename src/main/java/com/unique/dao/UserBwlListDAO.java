package com.unique.dao;

import com.unique.po.UserBwlListPO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserBwlListDAO {
    int deleteByPrimaryKey(Integer id);

    int insert(UserBwlListPO record);

    int insertSelective(UserBwlListPO record);

    UserBwlListPO selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserBwlListPO record);

    int updateByPrimaryKey(UserBwlListPO record);

    List<UserBwlListPO> selectByUserIDAndTitleId(@Param("userId") Integer userId, @Param("bwlTitleId") Integer bwlTitleId);
}