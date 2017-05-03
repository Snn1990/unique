package com.unique.dao;

import com.unique.po.TbTableInfoPO;

import java.util.List;

public interface TbTableInfoDAO {
    int deleteByPrimaryKey(Integer id);

    int insert(TbTableInfoPO record);

    int insertSelective(TbTableInfoPO record);

    TbTableInfoPO selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TbTableInfoPO record);

    int updateByPrimaryKey(TbTableInfoPO record);

    List<TbTableInfoPO> selectByUserId(Integer userId);
}