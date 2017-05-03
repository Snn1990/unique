package com.unique.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.unique.bo.BwlInfoRspBo;
import com.unique.dao.UserBwlListDAO;
import com.unique.dao.UserBwlTitleListDAO;
import com.unique.po.UserBwlListPO;
import com.unique.po.UserBwlTitleListPO;
import com.unique.service.BwlService;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by nan on 2017/4/17.
 */
@Service("BwlService")
public class BwlServiceImpl implements BwlService {
    private final static Logger logger = LoggerFactory.getLogger(BwlServiceImpl.class);
    /**
     * 用户备忘录详细信息列表
     */
    @Autowired
    public UserBwlListDAO userBwlListDAO;
    /**
     * 用户备忘录信息标题列表
     */
    @Autowired
    public UserBwlTitleListDAO userBwlTitleListDAO;
    @Override
    public String BwlList(Integer userId) {
        List<BwlInfoRspBo> rspBo = new ArrayList<BwlInfoRspBo>();
        JSONObject jsonObject = new JSONObject();
        if(userId != null && userId > 0){
            List<UserBwlTitleListPO> userBwlTitleListPOList =  userBwlTitleListDAO.selectByUserId(userId);
            if(userBwlTitleListPOList != null && userBwlTitleListPOList.size() > 0){
                logger.debug("查询到用户id【"+userId+"】的备忘录标题信息为【"+userBwlTitleListPOList.size()+"】条");
                for (UserBwlTitleListPO po:userBwlTitleListPOList
                        ) {
                    BwlInfoRspBo bwlInfoRspBo = new BwlInfoRspBo();
                    logger.debug(po.getTitleText());
                    bwlInfoRspBo.setTitleId(po.getId());
                    bwlInfoRspBo.setTitleText(po.getTitleText());
                    //通过标题ID和用户Id查询详细的备忘录
                    List<UserBwlListPO> userBwlListPOList = userBwlListDAO.selectByUserIDAndTitleId(userId,po.getId());
                    if(userBwlListPOList != null && userBwlListPOList.size() > 0){
                        for (UserBwlListPO bwlPo:userBwlListPOList
                             ) {
                            logger.debug("标题【"+po.getTitleText()+"】包含的信息为【"+bwlPo.getBwlTxt()+"】");
                        }

                    }else{
                        logger.debug("标题【"+po.getTitleText()+"】查询不到包含的备忘信息");
                    }
                    bwlInfoRspBo.setBwlListInfo(userBwlListPOList);
                    rspBo.add(bwlInfoRspBo);
                }
            }else{
                logger.debug("用户id【"+userId+"】暂无备忘录标题信息");
            }
        }else{
            logger.error("无效的用户ID,不允许查询备忘录信息");
        }
        String str = JSON.toJSONString(rspBo);
        logger.debug(str);
        return str;
    }

    @Override
    public boolean saveBwlInfo(UserBwlListPO req) {
        logger.debug("新增备忘信息Begin");
        if(!checkBwlInfo(req)){
            return false;
        }
        userBwlListDAO.insert(req);
        logger.debug("新增备忘信息end");
        return true;
    }

    @Override
    public boolean saveBwlTitleInfo(UserBwlTitleListPO req) {
        if(req != null){
            userBwlTitleListDAO.insert(req);
            return true;
        }
        return false;
    }

    public Boolean checkBwlInfo(UserBwlListPO po){
        if(po != null){
            if(po.getUserId() == null || po.getUserId() <1){
                logger.error("userId参数无效");
                return false;
            }
            if(po.getBwlTitleId() == null || po.getBwlTitleId() < 1){
                logger.error("bwlTitleId参数无效");
                return false;
            }
            if(!StringUtils.isNotBlank(po.getBwlTxt())){
                logger.error("bwlTxt参数无效");
                return false;
            }
            if(po.getCreateTime() == null){
                logger.error("createTime参数无效");
                return false;
            }
        }else{
            return false;
        }
        return true;
    }
}
