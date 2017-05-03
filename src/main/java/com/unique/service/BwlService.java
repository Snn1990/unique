package com.unique.service;

import com.unique.po.UserBwlListPO;
import com.unique.po.UserBwlTitleListPO;

/**
 * Created by nan on 2017/4/17.
 */
public interface BwlService {

    /**
     * 返回当前用户的备忘录列表
     * @return 返回值为json串
     */
    public String BwlList(Integer userId);

    /**
     * 新增备忘信息
     * @param req
     * @return
     */
    public boolean saveBwlInfo(UserBwlListPO req);

    /**
     * 新增备忘录标题信息
     * @param req
     * @return
     */
    public boolean saveBwlTitleInfo(UserBwlTitleListPO req);
}
