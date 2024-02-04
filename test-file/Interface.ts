export interface CompanyUserLoginRequest {
            
    /** 手机号/邮箱  */
    accountNum: string;

    /** 密码  */
    userPassword: string;

    /** 验证码  */
    verifyCode: string;

}


export interface CompanyUserLoginResponse {
            
    /** 用户主键id  */
    userId: number;

    /** 账号  */
    account: string;

    /** 超级管理员标识，true-是超级管理员  */
    superAdmin: boolean;

    /** 用户基本信息  */
    simpleUserInfo: CompanyUserLoginSimpleUserInfo;

    /** 用户角色信息  */
    simpleRoleInfoList: CompanyUserLoginSimpleRoleInfoList[];

    /** 公司/组织id  */
    organizationId: number;

    /** 职务信息  */
    positionId: number;

    /** 用户数据范围枚举  */
    dataScopeTypeEnums: string[];

    /** 用户数据范围用户信息  */
    dataScopeUserIds: string[];

    /** 用户数据范围组织信息  */
    dataScopeOrganizationIds: string[];

    /** 可用资源集合  */
    resourceUrls: string[];

    /** 用户拥有的按钮编码集合  */
    buttonCodes: string[];

    /** 登录的时间  */
    loginTime: string;

    /** 用户的token  */
    token: string;

    /** 其他信息，Dict为Map的拓展  */
    otherInfos: CompanyUserLoginOtherInfos;

    /** 用户的ws-url  */
    wsUrl: string;

    /** 用户头像url  */
    avatarUrl: string;

    /** 当前用户语种的标识  */
    tranLanguageCode: string;

    /** 租户的编码  */
    tenantCode: string;

    /** 是否是C端用户  */
    customerFlag: boolean;

    /** 是否为游客登录  */
    visitor: boolean;

    /** 游客标识Id  */
    visitorId: string;

    /** 用户职位  */
    userPosition: string;

    /** 公司名称  */
    companyName: string;

    /** 手机号  */
    userPhone: string;

    /** 认证姓名  */
    userCardName: string;

    /** 邮件  */
    userMail: string;

    /** 用户头像  */
    userIcon: string;

    /** 是否为B端用户  */
    isSassUser: boolean;

    /** B端URl  */
    businessUrl: string;

    /** saasId  */
    saasUserId: string;

    /** 是否绑定  */
    isBind: boolean;

    /** 简介  */
    userDescribe: string;

    /** 审核状态（-1(未注册) 0(审核中) 1(审核通过待确认) 2(审核通过) 3(审核驳回)）  */
    state: number;

}

export interface CompanyUserLoginSimpleUserInfo {
                
    /**   */
    nickName: string;

    /**   */
    realName: string;

    /**   */
    avatar: number;

    /**   */
    birthday: string;

    /**   */
    sex: string;

    /**   */
    email: string;

    /**   */
    phone: string;

    /**   */
    tel: string;

}

export interface CompanyUserLoginSimpleRoleInfoList {
                
    /** 角色id  */
    roleId?: number;

    /** 角色名称  */
    roleName?: string;

    /** 角色code  */
    roleCode?: string;

}

export interface CompanyUserLoginOtherInfos {
                
}

export interface CompanyUserLoginPasswordRequest {
            
    /** 手机号/邮箱  */
    accountNum: string;

    /** 密码  */
    userPassword: string;

    /** 验证码  */
    verifyCode: string;

}


export interface CompanyUserLoginPasswordResponse {
            
    /**   */
    userId: number;

    /**   */
    account: string;

    /**   */
    superAdmin: boolean;

    /**   */
    simpleUserInfo: CompanyUserLoginPasswordSimpleUserInfo;

    /**   */
    simpleRoleInfoList: CompanyUserLoginPasswordSimpleRoleInfoList[];

    /**   */
    organizationId: number;

    /**   */
    positionId: number;

    /**   */
    dataScopeTypeEnums: string[];

    /**   */
    dataScopeUserIds: string[];

    /**   */
    dataScopeOrganizationIds: string[];

    /**   */
    resourceUrls: string[];

    /**   */
    buttonCodes: string[];

    /**   */
    loginTime: string;

    /**   */
    token: string;

    /**   */
    otherInfos: CompanyUserLoginPasswordOtherInfos;

    /**   */
    wsUrl: string;

    /**   */
    avatarUrl: string;

    /**   */
    tranLanguageCode: string;

    /**   */
    tenantCode: string;

    /**   */
    customerFlag: boolean;

    /**   */
    visitor: boolean;

    /**   */
    visitorId: string;

    /**   */
    userPosition: string;

    /**   */
    companyName: string;

    /**   */
    userPhone: string;

    /**   */
    userCardName: string;

    /**   */
    userMail: string;

    /**   */
    userIcon: string;

    /**   */
    isSassUser: boolean;

    /**   */
    businessUrl: string;

    /**   */
    saasUserId: string;

    /**   */
    isBind: boolean;

    /**   */
    userDescribe: string;

    /**   */
    state: number;

}

export interface CompanyUserLoginPasswordSimpleUserInfo {
                
    /**   */
    nickName: string;

    /**   */
    realName: string;

    /**   */
    avatar: number;

    /**   */
    birthday: string;

    /**   */
    sex: string;

    /**   */
    email: string;

    /**   */
    phone: string;

    /**   */
    tel: string;

}

export interface CompanyUserLoginPasswordSimpleRoleInfoList {
                
    /**   */
    roleId?: number;

    /**   */
    roleName?: string;

    /**   */
    roleCode?: string;

}

export interface CompanyUserLoginPasswordOtherInfos {
                
}

export interface CompanyUserLoginRegisterRequest {
            
    /** 手机号/邮箱  */
    accountNum: string;

    /** 密码  */
    userPassword: string;

    /** 验证码  */
    verifyCode: string;

}


export interface CompanyUserLoginRegisterResponse {
            
    /**   */
    userId: number;

    /**   */
    account: string;

    /**   */
    superAdmin: boolean;

    /**   */
    simpleUserInfo: CompanyUserLoginRegisterSimpleUserInfo;

    /**   */
    simpleRoleInfoList: CompanyUserLoginRegisterSimpleRoleInfoList[];

    /**   */
    organizationId: number;

    /**   */
    positionId: number;

    /**   */
    dataScopeTypeEnums: string[];

    /**   */
    dataScopeUserIds: string[];

    /**   */
    dataScopeOrganizationIds: string[];

    /**   */
    resourceUrls: string[];

    /**   */
    buttonCodes: string[];

    /**   */
    loginTime: string;

    /**   */
    token: string;

    /**   */
    otherInfos: CompanyUserLoginRegisterOtherInfos;

    /**   */
    wsUrl: string;

    /**   */
    avatarUrl: string;

    /**   */
    tranLanguageCode: string;

    /**   */
    tenantCode: string;

    /**   */
    customerFlag: boolean;

    /**   */
    visitor: boolean;

    /**   */
    visitorId: string;

    /**   */
    userPosition: string;

    /**   */
    companyName: string;

    /**   */
    userPhone: string;

    /**   */
    userCardName: string;

    /**   */
    userMail: string;

    /**   */
    userIcon: string;

    /**   */
    isSassUser: boolean;

    /**   */
    businessUrl: string;

    /**   */
    saasUserId: string;

    /**   */
    isBind: boolean;

    /**   */
    userDescribe: string;

    /**   */
    state: number;

}

export interface CompanyUserLoginRegisterSimpleUserInfo {
                
    /**   */
    nickName: string;

    /**   */
    realName: string;

    /**   */
    avatar: number;

    /**   */
    birthday: string;

    /**   */
    sex: string;

    /**   */
    email: string;

    /**   */
    phone: string;

    /**   */
    tel: string;

}

export interface CompanyUserLoginRegisterSimpleRoleInfoList {
                
    /**   */
    roleId?: number;

    /**   */
    roleName?: string;

    /**   */
    roleCode?: string;

}

export interface CompanyUserLoginRegisterOtherInfos {
                
}

export interface CompanyUserResetRegisterRequest {
            
    /** 手机号/邮箱  */
    accountNum: string;

    /** 密码  */
    userPassword: string;

    /** 验证码  */
    verifyCode?: string;

}


export interface CompanyUserResetRegisterResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: boolean;

}


export interface CompanyUserSendVerificationRequest {
            
    /** 手机号/邮箱  */
    accountNum?: string;

    /** register：用户注册  login：用户登录  */
    fromType?: string;

}


export interface CompanyUserSendVerificationResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: boolean;

}


export interface CompanyCheckedLicenseRequest {
            
    /** 营业执照图片url */
    license?: string;

    /** 公司id */
    companyId?: string;

}


export interface CompanyCheckedLicenseResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: CompanyCheckedLicenseData;

}

export interface CompanyCheckedLicenseData {
                
    /** 统一社会信用代码  */
    regNum: string;

    /** 企业名称  */
    companyName: string;

}

export interface AddressRecordDictionaryRequest {
            
    /** 0:所有省份 */
    parentId?: string;

}


export interface AddressRecordDictionaryResponse {
            
    /**   */
    message: string;

    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    data: AddressRecordDictionaryData[];

}

export interface AddressRecordDictionaryData {
                
    /** 主键  */
    id?: string;

    /** 名称  */
    name?: string;

    /** 拼音  */
    pinyin?: string;

}

export interface CompanyModifyRequest {
            
    /** 公司主键  */
    id: string;

    /** 简介  */
    companyIntroductory?: string;

    /** 企业全称  */
    companyName?: string;

    /** 企业网址  */
    companyUrl?: string;

    /** 联系邮箱  */
    companyEmail?: string;

    /** 企业LOGO  */
    companyLogo?: string;

    /** 企业背景图  */
    companyBackground?: string;

    /** 营业执照  */
    auditImgs?: string;

    /** 社会信用代码  */
    companyCode?: string;

    /** 品牌  */
    companyBrands?: string[];

    /** 企业所处行业  */
    companyIndustry?: string;

    /** 联系人手机号  */
    companyPhone?: string;

    /** 地址信息  */
    addressRecordVO?: CompanyModifyAddressRecordVO;

    /** 企业显示名称  */
    showName?: string;

    /** 联系人名称  */
    contactName?: string;

}

export interface CompanyModifyAddressRecordVO {
                
    /** 省id  */
    provinceId?: number;

    /** 省名称  */
    provinceName?: string;

    /** 城市id  */
    cityId?: number;

    /** 市名称  */
    cityName?: string;

    /** 区县id  */
    districtId?: number;

    /** 区县名称  */
    districtName?: string;

    /** 详细地址  */
    address?: string;

    /** 主键，没有时不传  */
    id?: string;

}

export interface CompanyModifyResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: boolean;

}


export interface CompanyDetailsRequest {
            
    /** 企业Id/登陆人默认企业填0 */
    companyId?: string;

}


export interface CompanyDetailsResponse {
            
    /**   */
    code: number;

    /**   */
    success: boolean;

    /**   */
    data: CompanyDetailsData;

}

export interface CompanyDetailsAddressRecordVO {
                
    /** 主键  */
    id?: number;

    /** 省份Id  */
    provinceId?: number;

    /** 省份名称  */
    provinceName?: string;

    /** 城市Id  */
    cityId?: number;

    /** 城市名称  */
    cityName?: string;

    /** 区县Id  */
    districtId?: number;

    /** 区县名称  */
    districtName?: string;

    /** 详细地址  */
    address?: string;

}

export interface CompanyDetailsData {
                
    /** 公司主键  */
    id: string;

    /** 简介  */
    companyIntroductory: string;

    /** 企业全称  */
    companyName: string;

    /** 网址  */
    companyUrl: string;

    /** 联系邮箱  */
    companyEmail: string;

    /** LOGO  */
    companyLogo: string;

    /** 背景图  */
    companyBackground: string;

    /** 社会信用代码  */
    companyCode: string;

    /** 品牌认证  */
    companyBrands: string[];

    /** 企业所处行业  */
    companyIndustry: string;

    /** 联系人手机号  */
    companyPhone: string;

    /**   */
    addressRecordVO?: CompanyDetailsAddressRecordVO;

    /** 认证状态：None(待认证），Auditing(认证中)，Approved(已认证），Rejected（认证驳回）  */
    companyStatus: string;

    /** 营业执照  */
    auditImgs: string;

    /** 显示的企业名称  */
    showName: string;

    /** 联系人名称  */
    contactName: string;

    /** 是否免费：  */
    versions: string;

}

export interface CompanyValidCompanyNameRequest {
            
    /** 企业Id */
    companyId?: string;

    /** 企业名称 */
    companyName?: string;

}


export interface CompanyValidCompanyNameResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: CompanyValidCompanyNameData;

}

export interface CompanyValidCompanyNameData {
                
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: boolean;

}

export interface CompanyUserDetailsRequest {
            
}


export interface CompanyUserDetailsResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: CompanyUserDetailsData;

}

export interface CompanyUserDetailsData {
                
    /**   */
    id: string;

    /** 手机号  */
    userPhone: string;

    /** 邮箱  */
    userEmail: string;

    /** 是否设置密码  */
    hasPassword: boolean;

    /** 用户名  */
    username: string;

    /** 状态：normal, disable  */
    state: string;

}

export interface CompanyUserBindAccountRequest {
            
    /** 绑定的账号，邮箱或手机号  */
    accountNum: string;

    /** 邮箱或手机号验证码  */
    verifyCode: string;

}


export interface CompanyUserBindAccountResponse {
            
    /**   */
    success: boolean;

    /**   */
    message: string;

    /**   */
    code: number;

    /**   */
    data: boolean;

}


export interface CompanySubmitAuditRequest {
            
    /** 公司主键  */
    id: string;

    /** 简介  */
    companyIntroductory?: string;

    /** 企业全称  */
    companyName?: string;

    /** 企业网址  */
    companyUrl?: string;

    /** 联系邮箱  */
    companyEmail?: string;

    /** 企业LOGO  */
    companyLogo?: string;

    /** 企业背景图  */
    companyBackground?: string;

    /** 营业执照  */
    auditImgs?: string;

    /** 社会信用代码  */
    companyCode?: string;

    /** 品牌  */
    companyBrands?: string[];

    /** 企业所处行业  */
    companyIndustry?: string;

    /** 联系人手机号  */
    companyPhone?: string;

    /** 地址信息  */
    addressRecordVO?: CompanySubmitAuditAddressRecordVO;

    /** 企业显示名称  */
    showName?: string;

    /** 联系人名称  */
    contactName?: string;

}

export interface CompanySubmitAuditAddressRecordVO {
                
    /** 省id  */
    provinceId?: number;

    /** 省名称  */
    provinceName?: string;

    /** 城市id  */
    cityId?: number;

    /** 市名称  */
    cityName?: string;

    /** 区县id  */
    districtId?: number;

    /** 区县名称  */
    districtName?: string;

    /** 详细地址  */
    address?: string;

    /** 主键，没有时不传  */
    id?: string;

}

export interface CompanySubmitAuditResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: boolean;

}


export interface AvatarDetailRequest {
            
    /** 主键Id */
    id: number;

}


export interface AvatarDetailResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: AvatarDetailData;

}

export interface AvatarDetailData {
                
    /** 主键  */
    id: number;

    /** 企业Id  */
    companyId: number;

    /** 角色Id  */
    roleId: number;

    /** 造型Id  */
    profilerId: number;

    /** 音色Id  */
    timbreId: number;

    /** 数字人类型：2D、3D  */
    avatarType: string;

    /** 全身或半身  */
    poseType: string;

    /** 形象名称  */
    avatarName: string;

    /** 创建时间  */
    createTime: string;

    /** 修改时间  */
    updateTime: string;

    /** 是否删除  */
    isDelete: boolean;

}

export interface VideoPageListRequest {
            
    /** 排序字段 updateTime、createTime、videoName  */
    orderBy: string;

    /** asc || desc  */
    sortBy: string;

    /** 10  */
    pageSize: number;

    /** 1  */
    pageNo: number;

    /** 搜索开始时间 yyyy-MM-dd   */
    searchBeginTime?: string;

    /** 搜索结束时间 yyyy-MM-dd  */
    searchEndTime?: string;

}


export interface VideoPageListResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: VideoPageListData;

}

export interface VideoPageListRows {
                
    /**   */
    id?: number;

    /**   */
    companyId?: number;

    /**   */
    avatarId?: number;

    /**   */
    draftId?: string;

    /**   */
    coverUrl?: string;

    /**   */
    state?: string;

    /**   */
    videoName?: string;

    /**   */
    videoUrl?: string;

    /**   */
    createTime?: string;

    /**   */
    draftName?: string;

}

export interface VideoPageListData {
                
    /**   */
    pageNo: number;

    /**   */
    pageSize: number;

    /**   */
    totalPage: number;

    /**   */
    totalRows: number;

    /**   */
    rows?: VideoPageListRows[];

}

export interface VideoUpdateNameRequest {
            
    /** 主键 */
    id?: number;

    /** 作品名称 */
    videoName?: string;

}


export interface VideoUpdateNameResponse {
            
}


export interface VideoDraftPageListRequest {
            
    /** 排序字段 updateTime、createTime、videoName  */
    orderBy: string;

    /** asc || desc  */
    sortBy: string;

    /** 10  */
    pageSize: number;

    /** 1  */
    pageNo: number;

    /** 开始时间 yyyy-MM-dd  */
    searchBeginTime?: string;

    /** 结束时间 yyyy-MM-dd  */
    searchEndTime?: string;

    /** 草稿类型：single、multiple  */
    draftType?: string;

}


export interface VideoDraftPageListResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: VideoDraftPageListData;

}

export interface VideoDraftPageListRows {
                
    /** 主键  */
    id?: number;

    /** 企业Id  */
    companyId?: number;

    /** 形象Id  */
    avatarId?: number;

    /** 音色Id  */
    timbreId?: number;

    /** 背景类型，bg-image、stage  */
    bgType?: string;

    /** 背景Id  */
    bgTypeId?: number;

    /** 视频比率：horizontal vertical  */
    videoRate?: string;

    /** 视频播放速度  */
    videoSpeed?: number;

    /** 音频类型：text、audio  */
    audioType?: string;

    /** 音频文本  */
    audioText?: string;

    /** 封面图  */
    coverUrl?: string;

    /** 是否多音检查  */
    isMul?: number;

    /** 草稿名称  */
    draftName?: string;

    /** 草稿类型：single、multiple  */
    draftType?: string;

    /** 创建时间  */
    createTime?: string;

}

export interface VideoDraftPageListData {
                
    /**   */
    pageNo: number;

    /**   */
    pageSize: number;

    /**   */
    totalPage: number;

    /**   */
    totalRows: number;

    /**   */
    rows?: VideoDraftPageListRows[];

}

export interface VideoDraftDetailRequest {
            
    /** 草稿Id */
    id: number;

}


export interface VideoDraftDetailResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: VideoDraftDetailData;

}

export interface VideoDraftDetailTimbreVO {
                
    /** 主键  */
    id: number;

    /** 音色名称  */
    timbreName: string;

    /** icon  */
    timbreIcon: string;

    /** 性别  */
    timbreSex: string;

    /** 音色平台  */
    timbrePlatform: string;

}

export interface VideoDraftDetailExpressionVO {
                
    /** 主键  */
    id: number;

    /** 角色Id  */
    roleId: number;

    /** 造型Id  */
    profilerId: number;

    /** 表情编码  */
    exsCode: string;

    /** 表情名称  */
    exsName: string;

    /** 表情图标  */
    exsIcon: string;

    /** 表情图片  */
    exsImg: string;

}

export interface VideoDraftDetailAvatarVO {
                
    /** 造型Id  */
    id: number;

    /** 角色Id  */
    roleId: number;

    /**   */
    profilerId: number;

    /** 音色Id  */
    timbreId: number;

    /** 造型名称  */
    avatarName: string;

    /** 造型类型：2D、3D  */
    avatarType: string;

    /** 姿态：full/half  */
    poseType: string;

    /** 数字人封面图  */
    coverUrl: string;

}

export interface VideoDraftDetailBgImageVO {
                
    /**   */
    id: number;

    /** 背景图片类型：color、image  */
    bgType: string;

    /** rgb颜色  */
    rgb?: string;

    /** 图片地址  */
    imageUrl?: string;

    /** 图片比率：horizontal vertical  */
    imageRate: string;

}

export interface VideoDraftDetailStageExtend {
                
    /** 是否显示切换机位  */
    displayCamera: boolean;

    /** 是否显示插入动作  */
    displayAction: boolean;

    /** 默认机位  */
    defaultCamera: string;

}

export interface VideoDraftDetailStageVO {
                
    /**   */
    id: number;

    /** 图片地址  */
    imageUrl: string;

    /** 舞台名称  */
    stageName: string;

    /** 姿态：full/half  */
    poseType: string;

    /** 位置 JSON格式{top、left、width、height}  */
    position: string;

    /** 舞台编码  */
    stageCode: string;

    /** 舞台扩展数据  */
    stageExtend: VideoDraftDetailStageExtend;

}

export interface VideoDraftDetailRecordConfig {
                
    /** 数字人位置 left、mid、right  */
    dhPosition?: string;

    /** 数字人距离上边界百分比  */
    avatarTop?: number;

    /** 数字人距离左边界百分比  */
    avatarLeft?: number;

    /** 数字人相对于窗口占比  */
    avatarWidth?: number;

    /** 背景图宽度  */
    bkgWidth?: number;

    /** 背景图高度  */
    bkgHeight?: number;

    /** 前端自定义扩展参数  */
    extendParam?: string;

}

export interface VideoDraftDetailData {
                
    /** 主键  */
    id: number;

    /** 企业Id  */
    companyId: number;

    /** 形象Id  */
    avatarId: number;

    /** 音色Id  */
    timbreId: number;

    /** 表情Id  */
    expressionId: number;

    /** 草稿名称  */
    draftName: string;

    /** 草稿类型：single、multiple  */
    draftType?: string;

    /** 背景类型：bg-image、stage  */
    bgType: string;

    /** 背景Id  */
    bgTypeId: number;

    /** 屏幕比率：horizontal vertical  */
    videoRate: string;

    /** 视频播放速度  */
    videoSpeed: number;

    /** 音频类型：text、audio  */
    audioType: string;

    /** 音频地址  */
    audioUrl: string;

    /** 音频文本  */
    audioText: string;

    /** 封面图  */
    coverUrl: string;

    /** 是否多音检查  */
    isMul: boolean;

    /** 音色信息  */
    timbreVO: VideoDraftDetailTimbreVO;

    /** 表情信息  */
    expressionVO: VideoDraftDetailExpressionVO;

    /** 造型信息  */
    avatarVO: VideoDraftDetailAvatarVO;

    /** 背景图片信息  */
    bgImageVO: VideoDraftDetailBgImageVO;

    /** 舞台信息  */
    stageVO: VideoDraftDetailStageVO;

    /** 录制配置信息  */
    recordConfig?: VideoDraftDetailRecordConfig;

}

export interface VideoBgImagePageListRequest {
            
    /**   */
    pageSize: number;

    /**   */
    pageNo: number;

    /**   */
    otherParams: VideoBgImagePageListOtherParams;

}

export interface VideoBgImagePageListOtherParams {
                
    /** 背景图片类型：color、image  */
    bgType: string;

}

export interface VideoBgImagePageListResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: VideoBgImagePageListData;

}

export interface VideoBgImagePageListRows {
                
    /** 主键  */
    id?: number;

    /** 背景类型：color、image  */
    bgType?: string;

    /** rgb颜色  */
    rgb?: string;

    /** 图片地址  */
    imageUrl?: string;

    /** 图片比率：horizontal vertical  */
    imageRate?: string;

    /** 是否可以删除  */
    canDelete?: boolean;

}

export interface VideoBgImagePageListData {
                
    /**   */
    pageNo: number;

    /**   */
    pageSize: number;

    /**   */
    totalPage: number;

    /**   */
    totalRows: number;

    /**   */
    rows?: VideoBgImagePageListRows[];

}

export interface VideoStagePageListRequest {
            
    /** 分页条数  */
    pageSize: number;

    /** 分页编号  */
    pageNo: number;

    /**   */
    otherParams?: VideoStagePageListOtherParams;

}

export interface VideoStagePageListOtherParams {
                
    /** 所有:null  全身/站姿: full  半身/坐姿: half  */
    poseType?: string;

}

export interface VideoStagePageListResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: VideoStagePageListData;

}

export interface VideoStagePageListStageExtend {
                
    /** 默认机位  */
    defaultCamera: string;

    /** 是否显示机位  */
    displayCamera: boolean;

    /** 是否显示动作  */
    displayAction: boolean;

}

export interface VideoStagePageListRows {
                
    /**   */
    id?: number;

    /** 企业Id  */
    companyId?: number;

    /** 图片地址  */
    imageUrl?: string;

    /** 舞台名称  */
    stageName?: string;

    /** 舞台编码  */
    stageCode?: string;

    /** 支持姿态：full,half  */
    poseType?: string;

    /** 位置信息  */
    position?: string;

    /** 舞台扩展信息  */
    stageExtend?: VideoStagePageListStageExtend;

}

export interface VideoStagePageListData {
                
    /**   */
    pageNo: number;

    /**   */
    pageSize: number;

    /**   */
    totalPage: number;

    /**   */
    totalRows: number;

    /**   */
    rows?: VideoStagePageListRows[];

}

export interface AvatarPageListRequest {
            
    /** 分页条数  */
    pageSize: number;

    /** 页码  */
    pageNo: number;

}


export interface AvatarPageListResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data?: AvatarPageListData;

}

export interface AvatarPageListRows {
                
    /** 主键  */
    id?: number;

    /** 企业Id  */
    companyId?: number;

    /** 角色Id  */
    roleId?: number;

    /** 造型Id  */
    profilerId?: number;

    /** 音色Id  */
    timbreId?: number;

    /** 数字人名称  */
    avatarName?: string;

    /** 数字人类型：2D、3D  */
    avatarType?: string;

    /** 封面图  */
    coverUrl?: string;

    /** 姿态：全身，半身  */
    poseType?: string;

    /** 创建时间  */
    createTime?: string;

}

export interface AvatarPageListData {
                
    /**   */
    pageNo: number;

    /**   */
    pageSize: number;

    /**   */
    totalPage: number;

    /**   */
    totalRows: number;

    /**   */
    rows?: AvatarPageListRows[];

}

export interface TimbrePageListRequest {
            
    /** 分页数  */
    pageSize: number;

    /** 页码  */
    pageNo: number;

}


export interface TimbrePageListResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: TimbrePageListData;

}

export interface TimbrePageListRows {
                
    /** 主键  */
    id?: number;

    /** 音色名称  */
    timbreName?: string;

    /** icon  */
    timbreIcon?: string;

    /** 性别：man、woman  */
    timbreSex?: string;

    /** 音色别名  */
    timbreAlias?: string;

    /** 试听地址  */
    audioSrc?: string;

    /** 音色融合平台  */
    timbrePlatform?: string;

}

export interface TimbrePageListData {
                
    /**   */
    pageNo: number;

    /**   */
    pageSize: number;

    /**   */
    totalPage: number;

    /**   */
    totalRows: number;

    /**   */
    rows?: TimbrePageListRows[];

}

export interface ProfilerPageListRequest {
            
    /**   */
    pageSize: number;

    /**   */
    pageNo: number;

}


export interface ProfilerPageListResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: ProfilerPageListData;

}

export interface ProfilerPageListRows {
                
    /** 主键  */
    id?: number;

    /** 角色Id  */
    roleId?: number;

    /** 造型名称  */
    profilerName?: string;

    /** 造型icon  */
    profilerIcon?: string;

    /** 全身图  */
    fullImg?: string;

    /** 半身图  */
    halfImg?: string;

    /** 姿态：full,half  */
    poses?: string;

}

export interface ProfilerPageListData {
                
    /**   */
    pageNo: number;

    /**   */
    pageSize: number;

    /**   */
    totalPage: number;

    /**   */
    totalRows: number;

    /**   */
    rows?: ProfilerPageListRows[];

}

export interface RolePageListRequest {
            
    /** 分页条数  */
    pageSize: number;

    /** 页码  */
    pageNo: number;

}


export interface RolePageListResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: RolePageListData;

}

export interface RolePageListRows {
                
    /** 主键  */
    id?: number;

    /** 角色名称  */
    roleName?: string;

    /** 图标  */
    roleIcon?: string;

    /** 角色类型：2D、3D  */
    roleType?: string;

    /** 角色性别：man、woman  */
    roleSex?: string;

}

export interface RolePageListData {
                
    /**   */
    pageNo: number;

    /**   */
    pageSize: number;

    /**   */
    totalPage: number;

    /**   */
    totalRows: number;

    /**   */
    rows?: RolePageListRows[];

}

export interface AvatarSaveRequest {
            
    /** 主键  */
    id: number;

    /** 角色Id  */
    roleId?: number;

    /** 造型Id  */
    profilerId?: number;

    /** 音色Id  */
    timbreId?: number;

    /** 名称  */
    avatarName?: string;

    /** 封面图  */
    coverUrl?: string;

    /** 类型：2D、3D  */
    avatarType?: string;

    /** 姿态  */
    poseType?: string;

}


export interface AvatarSaveResponse {
            
}


export interface VideoDraftGetSettingRequest {
            
}


export interface VideoDraftGetSettingResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: VideoDraftGetSettingData;

}

export interface VideoDraftGetSettingTimbreVO {
                
    /**   */
    id: number;

    /**   */
    timbreName: string;

    /**   */
    timbreIcon: string;

    /**   */
    timbreSex: string;

    /**   */
    timbreAlias: string;

    /**   */
    audioSrc: string;

}

export interface VideoDraftGetSettingAvatarVO {
                
    /**   */
    id: number;

    /**   */
    companyId: number;

    /**   */
    roleId: number;

    /**   */
    profilerId: number;

    /**   */
    timbreId: number;

    /**   */
    avatarName: string;

    /**   */
    coverUrl: string;

    /**   */
    avatarType: string;

    /**   */
    poseType: string;

    /**   */
    createTime: string;

}

export interface VideoDraftGetSettingStageVO {
                
    /**   */
    id: number;

    /**   */
    companyId: number;

    /**   */
    imageUrl: string;

    /**   */
    stageName: string;

    /**   */
    poseType: string;

    /**   */
    position: string;

}

export interface VideoDraftGetSettingDefaultDraftVO {
                
    /**   */
    companyId: number;

    /**   */
    avatarId: number;

    /**   */
    timbreId: number;

    /**   */
    draftName: string;

    /**   */
    bgType: string;

    /**   */
    bgTypeId: number;

    /**   */
    videoSpeed: number;

    /**   */
    coverUrl: string;

    /**   */
    isMul?: boolean;

    /**   */
    createTime?: string;

    /**   */
    timbreVO?: VideoDraftGetSettingTimbreVO;

    /**   */
    avatarVO?: VideoDraftGetSettingAvatarVO;

    /**   */
    stageVO?: VideoDraftGetSettingStageVO;

}

export interface VideoDraftGetSettingData {
                
    /** Socket 的链接名称  */
    socketLinkName: string;

    /** 初始配置信息  */
    defaultDraftVO: VideoDraftGetSettingDefaultDraftVO;

}

export interface VideoDraftDeleteRequest {
            
    /** 主键 */
    id?: string;

}


export interface VideoDraftDeleteResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: boolean;

}


export interface OssUploadFileRequest {
            
    /** 文件  */
    file: string;

    /** 文件夹名称 expamle: background-image */
    folderName: string;

    /** 文件名称 expamle: 201291212012.jpg */
    fileName?: string;

}


export interface OssUploadFileResponse {
            
}


export interface VideoDraftCreateRequest {
            
    /** 来源类型：avatar|default|video */
    sourceType: string;

    /** sourceType 为 avatars时传avatarId；default时传0；video时传draftId */
    id: number;

    /** 草稿类型：single、multiple */
    draftType?: string;

}


export interface VideoDraftCreateResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /** 草稿Id  */
    data: number;

}


export interface VideoSaveRequest {
            
    /** 草稿Id  */
    draftId: number;

    /** 视频名称  */
    videoName: string;

    /** 视频排向：horizontal vertical  */
    videoRate: string;

    /** 视频格式，mp4  */
    videoFormat: string;

    /** 视频比率  */
    videoResolution: string;

    /** 视频帧率  */
    frameRate: string;

    /** 视频码率  */
    bitrate: string;

}


export interface VideoSaveResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /** 视频Id  */
    data: number;

}


export interface VideoDetailRequest {
            
    /** 视频主键 */
    id: number;

}


export interface VideoDetailResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: VideoDetailData;

}

export interface VideoDetailData {
                
    /** 主键  */
    id: number;

    /** 企业Id  */
    companyId: number;

    /** 数字人形象Id  */
    avatarId: number;

    /** 草稿Id  */
    draftId: string;

    /** 封面图  */
    coverUrl: string;

    /** 合成状态：running、failed、completed  */
    state: string;

    /** 视频名称  */
    videoName: string;

    /** 视频地址  */
    videoUrl: string;

    /** 视频方向：horizontal vertical  */
    videoRate: string;

    /** 视频格式，mp4  */
    videoFormat: string;

    /** 视频比率  */
    videoResolution: string;

    /** 帧率  */
    frameRate: string;

    /** 码率  */
    bitrate: string;

    /** 创建时间  */
    createTime: string;

}

export interface VideoReSynthesisRequest {
            
    /** 重新合成 */
    id?: number;

}


export interface VideoReSynthesisResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /** 修改成功或失败  */
    data: boolean;

}


export interface OssProxyRequest {
            
    /** 被代理图片地址 */
    fileUrl?: string;

}


export interface OssProxyResponse {
            
}


export interface VideoDeleteRequest {
            
    /** 数字人Id */
    id?: string;

}


export interface VideoDeleteResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /** 成功或失败  */
    data: boolean;

}


export interface LivePageListRequest {
            
    /**   */
    orderBy: string;

    /**   */
    sortBy: string;

    /**   */
    pageSize: number;

    /**   */
    pageNo: number;

}


export interface LivePageListResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: LivePageListData;

}

export interface LivePageListRows {
                
    /**   */
    id?: number;

    /**   */
    companyId?: number;

    /**   */
    avatarId?: number;

    /**   */
    draftId?: number;

    /**   */
    taskId?: number;

    /** 图片地址  */
    coverUrl?: string;

    /**   */
    state?: string;

    /** 名称  */
    videoName?: string;

    /**   */
    videoRate?: string;

    /**   */
    videoFormat?: string;

    /**   */
    videoResolution?: string;

    /**   */
    frameRate?: string;

    /**   */
    bitrate?: string;

    /**   */
    createUser?: number;

    /** 创建时间  */
    createTime?: string;

    /**   */
    updateTime?: string;

    /**   */
    isDelete?: boolean;

}

export interface LivePageListData {
                
    /**   */
    pageNo: number;

    /**   */
    pageSize: number;

    /**   */
    totalPage: number;

    /**   */
    totalRows: number;

    /**   */
    rows?: LivePageListRows[];

}

export interface LiveDeleteRequest {
            
    /** 主键 */
    id?: string;

}


export interface LiveDeleteResponse {
            
}


export interface LiveUpdateNameRequest {
            
    /** 主键Id */
    id?: string;

    /** 直播名称 */
    liveName?: string;

}


export interface LiveUpdateNameResponse {
            
}


export interface LiveDetailRequest {
            
    /** 主键 */
    id: number;

}


export interface LiveDetailResponse {
            
}


export interface LiveStartRequest {
            
    /** RealTime:实时   Video:录播 */
    liveWay?: string;

    /** RealTime时传 草稿Id，Video时传 视频id  */
    id?: number;

}


export interface LiveStartResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /** 直播id  */
    data: number;

}


export interface LiveStateRequest {
            
}


export interface LiveStateResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: LiveStateData;

}

export interface LiveStateData {
                
    /** 主键  */
    id?: number;

    /**   */
    companyId?: string;

    /**   */
    avatarId?: string;

    /**   */
    draftId?: number;

    /** 草稿类型：single、multiple  */
    draftType: string;

    /**   */
    coverUrl?: string;

    /** 直播状态 WarmUp:暖场  Living:直播中  Complete:直播完成  */
    state: string;

    /** 直播类型 App、TV  */
    liveType: string;

    /** 直播方式 RealTime、Video  */
    liveWay?: string;

    /** 直播名称  */
    videoName: string;

    /**   */
    createTime?: string;

}

export interface LiveStopRequest {
            
    /** 直播Id */
    id?: number;

}


export interface LiveStopResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /** 成功或失败  */
    data: boolean;

}


export interface LiveStartSpeakerRequest {
            
    /** 直播Id */
    id?: number;

    /** 片段Id */
    draftFragmentId?: number;

}


export interface LiveStartSpeakerResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: boolean;

}


export interface VideoTaskStateRequest {
            
}


export interface VideoTaskStateResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: VideoTaskStateData;

}

export interface VideoTaskStateData {
                
    /** 任务状态 Completed，Running  */
    state: string;

}

export interface VideoDraftSaveRequest {
            
    /** 主键Id ，新增时填0  */
    id: number;

    /** 形象Id  */
    avatarId?: number;

    /** 音色Id  */
    timbreId?: number;

    /** 表情Id  */
    expressionId?: number;

    /** 草稿名称  */
    draftName?: string;

    /** 草稿类型：single、multiple  */
    draftType?: string;

    /** 背景类型：bg-image、stage  */
    bgType?: string;

    /** 选择的背景Id  */
    bgTypeId?: number;

    /** 视频比率：horizontal vertical  */
    videoRate?: string;

    /** 视频播放速度  */
    videoSpeed?: number;

    /** 音频类型：text、audio  */
    audioType?: string;

    /** 音频地址  */
    audioUrl?: string;

    /** 音频文本，#{T0.5}#、#{T1}#、#{T2}# 延迟秒数  、#{de,1}# 多音字标识符 、#{C0}# 机位标识符号  C0:近机位  C1:远机位、 #{W0,EVA}# 读音方式，1:字母发音  2:单词发音、#{Acode}# 动作标识符号                            */
    audioText?: string;

    /** 封面图  */
    coverUrl?: string;

    /** 是否多音检查  */
    isMul?: boolean;

    /** 录制配置  */
    recordConfig?: VideoDraftSaveRecordConfig;

}

export interface VideoDraftSaveRecordConfig {
                
    /** 数字人位置 left、mid、right  */
    dhPosition?: string;

    /** 数字人距离上边界百分比  */
    avatarTop?: number;

    /** 数字人距离左边界百分比  */
    avatarLeft?: number;

    /** 数字人相对于窗口宽度占比  */
    avatarWidth?: number;

    /** 背景图宽度  */
    bkgWidth?: number;

    /** 背景图高度  */
    bkgHeight?: number;

    /** 前端自定义扩展参数  */
    extendParam?: string;

}

export interface VideoDraftSaveResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /** Id  */
    data: number;

}


export interface VideoDraftFragmentsPageListRequest {
            
    /** 分页条数  */
    pageSize: number;

    /** 分页数  */
    pageNo: number;

    /** 草稿Id  */
    draftId: number;

}


export interface VideoDraftFragmentsPageListResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: VideoDraftFragmentsPageListData;

}

export interface VideoDraftFragmentsPageListRows {
                
    /**   */
    id?: number;

    /** 草稿Id  */
    draftId?: number;

    /** 状态：None, Broadcasting  */
    state?: string;

    /** 音频文本  */
    audioText?: string;

    /** 排序  */
    sort?: number;

}

export interface VideoDraftFragmentsPageListData {
                
    /**   */
    pageNo: number;

    /**   */
    pageSize: number;

    /**   */
    totalPage: number;

    /**   */
    totalRows: number;

    /**   */
    rows?: VideoDraftFragmentsPageListRows[];

}

export interface VideoDraftFragmentsSaveRequest {
            
    /** 主键  */
    id: number;

    /** 草稿id  */
    draftId: number;

    /** 音频文本  */
    audioText: string;

    /** 排序  */
    sort: number;

}


export interface VideoDraftFragmentsSaveResponse {
            
}


export interface VideoDraftFragmentsDeleteRequest {
            
    /** 片段Id */
    id?: number;

}


export interface VideoDraftFragmentsDeleteResponse {
            
}


export interface VideoBgImageSaveRequest {
            
    /**   */
    id?: number;

    /** 可选值：color、image  */
    bgType: string;

    /** rgb颜色  */
    rgb?: string;

    /** 图片地址  */
    imageUrl?: string;

    /** 图片比率：horizontal vertical  */
    imageRate: string;

}


export interface VideoBgImageSaveResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: number;

}


export interface VideoBgImageDeleteRequest {
            
    /** ID */
    id?: number;

}


export interface VideoBgImageDeleteResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: boolean;

}


export interface AppGetSettingRequest {
            
}


export interface AppGetSettingResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: AppGetSettingData;

}

export interface AppGetSettingData {
                
    /** 应用编码：platform、yicai-tv、yicai-app  */
    appCode: string;

    /** OSS 域名  */
    ossDomain: string;

}

export interface ProfilerDetailRequest {
            
    /** 造型Id */
    id?: string;

}


export interface ProfilerDetailResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: ProfilerDetailData;

}

export interface ProfilerDetailActions {
                
    /** 动作名称  */
    name?: string;

    /** 动作标签 standby:待机  gesture:手势  state:陈述  */
    tag?: string;

    /** 图片  */
    img?: string;

    /** 动作编号  */
    code?: string;

    /** 时长（秒）  */
    duration?: number;

}

export interface ProfilerDetailData {
                
    /** 主键  */
    id: number;

    /** 角色Id  */
    roleId: number;

    /** 造型编码  */
    profilerCode: string;

    /** 造型名称  */
    profilerName: string;

    /** 造型图标  */
    profilerIcon: string;

    /** 全身图片  */
    fullImg: string;

    /** 半身图片  */
    halfImg: string;

    /** 包含姿态类型多个,隔开 full,half  */
    poses?: string;

    /** 动作列表  */
    actions?: ProfilerDetailActions[];

}

export interface CompanyUserUpdateExpireTokenRequest {
            
}


export interface CompanyUserUpdateExpireTokenResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: CompanyUserUpdateExpireTokenData;

}

export interface CompanyUserUpdateExpireTokenData {
                
    /** 剩余过期时间（秒）  */
    expire: number;

    /** 新Token, 为空时不用处理  */
    token?: string;

}

export interface ExpressionPageListRequest {
            
    /** 分页条数  */
    pageSize: number;

    /** 页码  */
    pageNo: number;

    /**   */
    otherParams: ExpressionPageListOtherParams;

}

export interface ExpressionPageListOtherParams {
                
    /** 造型Id  */
    profilerId: number;

}

export interface ExpressionPageListResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: ExpressionPageListData;

}

export interface ExpressionPageListRows {
                
    /** 主键  */
    id?: number;

    /** 数字人角色Id  */
    roleId?: number;

    /** 数字人造型Id  */
    profilerId?: number;

    /** 表情编码  */
    exsCode?: string;

    /** 表情名称  */
    exsName?: string;

    /** 表情图标  */
    exsIcon?: string;

    /** 表情图片  */
    exsImg?: string;

}

export interface ExpressionPageListData {
                
    /**   */
    pageNo: number;

    /**   */
    pageSize: number;

    /**   */
    totalPage: number;

    /**   */
    totalRows: number;

    /**   */
    rows: ExpressionPageListRows[];

}

export interface ExpressionDefaultRequest {
            
    /** 数字人造型Id */
    profilerId: number;

    /** 数字人表情Code, 没有值时传空字符串 */
    exsCode: string;

}


export interface ExpressionDefaultResponse {
            
    /**   */
    success: boolean;

    /**   */
    code: string;

    /**   */
    message: string;

    /**   */
    data: ExpressionDefaultData;

}

export interface ExpressionDefaultData {
                
    /**   */
    id: number;

    /** 角色Id  */
    roleId: number;

    /** 造型Id  */
    profilerId: number;

    /** 表情编码  */
    exsCode: string;

    /** 表情名称  */
    exsName: string;

    /** 表情图标  */
    exsIcon: string;

    /** 表情图片  */
    exsImg: string;

}

export interface GuestUserCreateRequest {
            
    /**   */
    guestType: string;

    /**   */
    sourceUrl: string;

    /**   */
    ipAddress: string;

    /**   */
    durationSecond: number;

}


export interface GuestUserCreateResponse {
            
}


