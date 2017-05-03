package com.unique.dao.dao_init;

import com.unique.po.TbTableInfoPO;

public interface TbTableInfoDAO {
    int deleteByPrimaryKey(Integer id);

    int insert(TbTableInfoPO record);

    int insertSelective(TbTableInfoPO record);

    TbTableInfoPO selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TbTableInfoPO record);

    int updateByPrimaryKey(TbTableInfoPO record);
}