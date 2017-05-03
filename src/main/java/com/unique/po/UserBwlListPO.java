package com.unique.po;

import java.util.Date;

public class UserBwlListPO {
    private Integer id;

    private String bwlTxt;

    private Integer bwlTitleId;

    private Integer userId;

    private Date createTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBwlTxt() {
        return bwlTxt;
    }

    public void setBwlTxt(String bwlTxt) {
        this.bwlTxt = bwlTxt == null ? null : bwlTxt.trim();
    }

    public Integer getBwlTitleId() {
        return bwlTitleId;
    }

    public void setBwlTitleId(Integer bwlTitleId) {
        this.bwlTitleId = bwlTitleId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}