package com.unique.bo;

import com.unique.po.UserBwlListPO;

import java.util.List;

/**
 * Created by nan on 2017/4/17.
 */
public class BwlInfoRspBo {
    String titleText;
    Integer titleId;
    List<UserBwlListPO> bwlListInfo;

    public String getTitleText() {
        return titleText;
    }

    public void setTitleText(String titleText) {
        this.titleText = titleText;
    }

    public Integer getTitleId() {
        return titleId;
    }

    public void setTitleId(Integer titleId) {
        this.titleId = titleId;
    }

    public List<UserBwlListPO> getBwlListInfo() {
        return bwlListInfo;
    }

    public void setBwlListInfo(List<UserBwlListPO> bwlListInfo) {
        this.bwlListInfo = bwlListInfo;
    }

    @Override
    public String toString() {
        return "BwlInfoRspBo{" +
                "titleText='" + titleText + '\'' +
                ", titleId=" + titleId +
                ", bwlListInfo=" + bwlListInfo +
                '}';
    }
}
