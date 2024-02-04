import { NetManager } from "@vgene/utils";
    
import { CompanyUserLoginRequest } from './Interface';
import { CompanyUserLoginResponse } from './Interface';
import { CompanyUserLoginPasswordRequest } from './Interface';
import { CompanyUserLoginPasswordResponse } from './Interface';
import { CompanyUserLoginRegisterRequest } from './Interface';
import { CompanyUserLoginRegisterResponse } from './Interface';
import { CompanyUserResetRegisterRequest } from './Interface';
import { CompanyUserResetRegisterResponse } from './Interface';
import { CompanyUserSendVerificationRequest } from './Interface';
import { CompanyUserSendVerificationResponse } from './Interface';
import { CompanyCheckedLicenseRequest } from './Interface';
import { CompanyCheckedLicenseResponse } from './Interface';
import { AddressRecordDictionaryRequest } from './Interface';
import { AddressRecordDictionaryResponse } from './Interface';
import { CompanyModifyRequest } from './Interface';
import { CompanyModifyResponse } from './Interface';
import { CompanyDetailsRequest } from './Interface';
import { CompanyDetailsResponse } from './Interface';
import { CompanyValidCompanyNameRequest } from './Interface';
import { CompanyValidCompanyNameResponse } from './Interface';
import { CompanyUserDetailsRequest } from './Interface';
import { CompanyUserDetailsResponse } from './Interface';
import { CompanyUserBindAccountRequest } from './Interface';
import { CompanyUserBindAccountResponse } from './Interface';
import { CompanySubmitAuditRequest } from './Interface';
import { CompanySubmitAuditResponse } from './Interface';
import { AvatarDetailRequest } from './Interface';
import { AvatarDetailResponse } from './Interface';
import { VideoPageListRequest } from './Interface';
import { VideoPageListResponse } from './Interface';
import { VideoUpdateNameRequest } from './Interface';
import { VideoUpdateNameResponse } from './Interface';
import { VideoDraftPageListRequest } from './Interface';
import { VideoDraftPageListResponse } from './Interface';
import { VideoDraftDetailRequest } from './Interface';
import { VideoDraftDetailResponse } from './Interface';
import { VideoBgImagePageListRequest } from './Interface';
import { VideoBgImagePageListResponse } from './Interface';
import { VideoStagePageListRequest } from './Interface';
import { VideoStagePageListResponse } from './Interface';
import { AvatarPageListRequest } from './Interface';
import { AvatarPageListResponse } from './Interface';
import { TimbrePageListRequest } from './Interface';
import { TimbrePageListResponse } from './Interface';
import { ProfilerPageListRequest } from './Interface';
import { ProfilerPageListResponse } from './Interface';
import { RolePageListRequest } from './Interface';
import { RolePageListResponse } from './Interface';
import { AvatarSaveRequest } from './Interface';
import { AvatarSaveResponse } from './Interface';
import { VideoDraftGetSettingRequest } from './Interface';
import { VideoDraftGetSettingResponse } from './Interface';
import { VideoDraftDeleteRequest } from './Interface';
import { VideoDraftDeleteResponse } from './Interface';
import { OssUploadFileRequest } from './Interface';
import { OssUploadFileResponse } from './Interface';
import { VideoDraftCreateRequest } from './Interface';
import { VideoDraftCreateResponse } from './Interface';
import { VideoSaveRequest } from './Interface';
import { VideoSaveResponse } from './Interface';
import { VideoDetailRequest } from './Interface';
import { VideoDetailResponse } from './Interface';
import { VideoReSynthesisRequest } from './Interface';
import { VideoReSynthesisResponse } from './Interface';
import { OssProxyRequest } from './Interface';
import { OssProxyResponse } from './Interface';
import { VideoDeleteRequest } from './Interface';
import { VideoDeleteResponse } from './Interface';
import { LivePageListRequest } from './Interface';
import { LivePageListResponse } from './Interface';
import { LiveDeleteRequest } from './Interface';
import { LiveDeleteResponse } from './Interface';
import { LiveUpdateNameRequest } from './Interface';
import { LiveUpdateNameResponse } from './Interface';
import { LiveDetailRequest } from './Interface';
import { LiveDetailResponse } from './Interface';
import { LiveStartRequest } from './Interface';
import { LiveStartResponse } from './Interface';
import { LiveStateRequest } from './Interface';
import { LiveStateResponse } from './Interface';
import { LiveStopRequest } from './Interface';
import { LiveStopResponse } from './Interface';
import { LiveStartSpeakerRequest } from './Interface';
import { LiveStartSpeakerResponse } from './Interface';
import { VideoTaskStateRequest } from './Interface';
import { VideoTaskStateResponse } from './Interface';
import { VideoDraftSaveRequest } from './Interface';
import { VideoDraftSaveResponse } from './Interface';
import { VideoDraftFragmentsPageListRequest } from './Interface';
import { VideoDraftFragmentsPageListResponse } from './Interface';
import { VideoDraftFragmentsSaveRequest } from './Interface';
import { VideoDraftFragmentsSaveResponse } from './Interface';
import { VideoDraftFragmentsDeleteRequest } from './Interface';
import { VideoDraftFragmentsDeleteResponse } from './Interface';
import { VideoBgImageSaveRequest } from './Interface';
import { VideoBgImageSaveResponse } from './Interface';
import { VideoBgImageDeleteRequest } from './Interface';
import { VideoBgImageDeleteResponse } from './Interface';
import { AppGetSettingRequest } from './Interface';
import { AppGetSettingResponse } from './Interface';
import { ProfilerDetailRequest } from './Interface';
import { ProfilerDetailResponse } from './Interface';
import { CompanyUserUpdateExpireTokenRequest } from './Interface';
import { CompanyUserUpdateExpireTokenResponse } from './Interface';
import { ExpressionPageListRequest } from './Interface';
import { ExpressionPageListResponse } from './Interface';
import { ExpressionDefaultRequest } from './Interface';
import { ExpressionDefaultResponse } from './Interface';
import { GuestUserCreateRequest } from './Interface';
import { GuestUserCreateResponse } from './Interface';
    
/**
 * 手机号/邮箱登录
 * 
 */
export const CompanyUserLogin = (data: CompanyUserLoginRequest): Promise<CompanyUserLoginResponse> => {
    return NetManager.inst.request('/user-server-api/company-user/login', 'post', data, 'application/json');
}

/**
 * 用户密码登录
 * 
 */
export const CompanyUserLoginPassword = (data: CompanyUserLoginPasswordRequest): Promise<CompanyUserLoginPasswordResponse> => {
    return NetManager.inst.request('/user-server-api/company-user/login-password', 'post', data, 'application/json');
}

/**
 * 用户注册
 * 
 */
export const CompanyUserLoginRegister = (data: CompanyUserLoginRegisterRequest): Promise<CompanyUserLoginRegisterResponse> => {
    return NetManager.inst.request('/user-server-api/company-user/login-register', 'post', data, 'application/json');
}

/**
 * 重置密码
 * 
 */
export const CompanyUserResetRegister = (data: CompanyUserResetRegisterRequest): Promise<CompanyUserResetRegisterResponse> => {
    return NetManager.inst.request('/user-server-api/company-user/reset-register', 'post', data, 'application/json');
}

/**
 * 发送验证码(邮箱/手机号)
 * 
 */
export const CompanyUserSendVerification = (data: CompanyUserSendVerificationRequest): Promise<CompanyUserSendVerificationResponse> => {
    return NetManager.inst.request('/user-server-api/company-user/send-verification', 'post', data, 'multipart/form-data');
}

/**
 * 识别营业执照
 * 
 */
export const CompanyCheckedLicense = (data: CompanyCheckedLicenseRequest): Promise<CompanyCheckedLicenseResponse> => {
    return NetManager.inst.request('/user-server-api/company/checked-license', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 查询省市区级联
 * 
 */
export const AddressRecordDictionary = (data: AddressRecordDictionaryRequest): Promise<AddressRecordDictionaryResponse> => {
    return NetManager.inst.request('/user-server-api/address-record/dictionary', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 企业信息修改
 * 
 */
export const CompanyModify = (data: CompanyModifyRequest): Promise<CompanyModifyResponse> => {
    return NetManager.inst.request('/user-server-api/company/modify', 'post', data, 'application/json');
}

/**
 * 企业详情信息
 * 
 */
export const CompanyDetails = (data: CompanyDetailsRequest): Promise<CompanyDetailsResponse> => {
    return NetManager.inst.request('/user-server-api/company/details', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 校验企业名称
 * 
 */
export const CompanyValidCompanyName = (data: CompanyValidCompanyNameRequest): Promise<CompanyValidCompanyNameResponse> => {
    return NetManager.inst.request('/user-server-api/company/valid-company-name', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 企业用户详情
 * 
 */
export const CompanyUserDetails = (data: CompanyUserDetailsRequest): Promise<CompanyUserDetailsResponse> => {
    return NetManager.inst.request('/user-server-api/company-user/details', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 企业用户绑定账号
 * 
 */
export const CompanyUserBindAccount = (data: CompanyUserBindAccountRequest): Promise<CompanyUserBindAccountResponse> => {
    return NetManager.inst.request('/user-server-api/company-user/bind-account', 'post', data, 'application/json');
}

/**
 * 企业信息提交审核
 * 
 */
export const CompanySubmitAudit = (data: CompanySubmitAuditRequest): Promise<CompanySubmitAuditResponse> => {
    return NetManager.inst.request('/user-server-api/company/submit-audit', 'post', data, 'application/json');
}

/**
 * 数字人形象详情
 * 
 */
export const AvatarDetail = (data: AvatarDetailRequest): Promise<AvatarDetailResponse> => {
    return NetManager.inst.request('/digital-human-server-api/avatar/detail', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 数字人作品列表
 * 
 */
export const VideoPageList = (data: VideoPageListRequest): Promise<VideoPageListResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video/pageList', 'post', data, 'application/json');
}

/**
 * 修改作品名称
 * 
 */
export const VideoUpdateName = (data: VideoUpdateNameRequest): Promise<VideoUpdateNameResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video/update-name', 'post', data, 'multipart/form-data');
}

/**
 * 数字人草稿列表
 * 
 */
export const VideoDraftPageList = (data: VideoDraftPageListRequest): Promise<VideoDraftPageListResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-draft/pageList', 'post', data, 'application/json');
}

/**
 * 数字人草稿详情
 * 
 */
export const VideoDraftDetail = (data: VideoDraftDetailRequest): Promise<VideoDraftDetailResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-draft/detail', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 数字人背景图片列表
 * 
 */
export const VideoBgImagePageList = (data: VideoBgImagePageListRequest): Promise<VideoBgImagePageListResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-bg-image/pageList', 'post', data, 'application/json');
}

/**
 * 数字人舞台列表
 * 
 */
export const VideoStagePageList = (data: VideoStagePageListRequest): Promise<VideoStagePageListResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-stage/pageList', 'post', data, 'application/json');
}

/**
 * 数字人形象列表
 * 
 */
export const AvatarPageList = (data: AvatarPageListRequest): Promise<AvatarPageListResponse> => {
    return NetManager.inst.request('/digital-human-server-api/avatar/pageList', 'post', data, 'application/json');
}

/**
 * 数字人音色列表
 * 
 */
export const TimbrePageList = (data: TimbrePageListRequest): Promise<TimbrePageListResponse> => {
    return NetManager.inst.request('/digital-human-server-api/timbre/pageList', 'post', data, 'application/json');
}

/**
 * 数字人造型列表
 * 
 */
export const ProfilerPageList = (data: ProfilerPageListRequest): Promise<ProfilerPageListResponse> => {
    return NetManager.inst.request('/digital-human-server-api/profiler/pageList', 'post', data, 'application/json');
}

/**
 * 数字人角色列表
 * 
 */
export const RolePageList = (data: RolePageListRequest): Promise<RolePageListResponse> => {
    return NetManager.inst.request('/digital-human-server-api/role/pageList', 'post', data, 'application/json');
}

/**
 * 保存数字人形象
 * 
 */
export const AvatarSave = (data: AvatarSaveRequest): Promise<AvatarSaveResponse> => {
    return NetManager.inst.request('/digital-human-server-api/avatar/save', 'post', data, 'application/json');
}

/**
 * 获取配置信息
 * 
 */
export const VideoDraftGetSetting = (data: VideoDraftGetSettingRequest): Promise<VideoDraftGetSettingResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-draft/get-setting', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 数字人草稿删除
 * 
 */
export const VideoDraftDelete = (data: VideoDraftDeleteRequest): Promise<VideoDraftDeleteResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-draft/delete', 'post', data, 'multipart/form-data');
}

/**
 * 上传文件
 * 
 */
export const OssUploadFile = (data: OssUploadFileRequest): Promise<OssUploadFileResponse> => {
    return NetManager.inst.request('/digital-human-server-api/oss/uploadFile', 'post', data, 'multipart/form-data');
}

/**
 * 创建数字人草稿
 * 
 */
export const VideoDraftCreate = (data: VideoDraftCreateRequest): Promise<VideoDraftCreateResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-draft/create', 'post', data, 'multipart/form-data');
}

/**
 * 数字人视频新增
 * 
 */
export const VideoSave = (data: VideoSaveRequest): Promise<VideoSaveResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video/save', 'post', data, 'application/json');
}

/**
 * 数字人视频详情
 * 
 */
export const VideoDetail = (data: VideoDetailRequest): Promise<VideoDetailResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video/detail', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 重新合成
 * 
 */
export const VideoReSynthesis = (data: VideoReSynthesisRequest): Promise<VideoReSynthesisResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video/re-synthesis', 'post', data, 'multipart/form-data');
}

/**
 * 代理
 * 
 */
export const OssProxy = (data: OssProxyRequest): Promise<OssProxyResponse> => {
    return NetManager.inst.request('/digital-human-server-api/oss/proxy', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 数字人视频删除
 * 
 */
export const VideoDelete = (data: VideoDeleteRequest): Promise<VideoDeleteResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video/delete', 'post', data, 'multipart/form-data');
}

/**
 * 直播列表查询
 * 
 */
export const LivePageList = (data: LivePageListRequest): Promise<LivePageListResponse> => {
    return NetManager.inst.request('/digital-human-server-api/live/pageList', 'post', data, 'application/json');
}

/**
 * 数字人直播删除
 * 
 */
export const LiveDelete = (data: LiveDeleteRequest): Promise<LiveDeleteResponse> => {
    return NetManager.inst.request('/digital-human-server-api/live/delete', 'post', data, 'multipart/form-data');
}

/**
 * 数字人直播修改名称
 * 
 */
export const LiveUpdateName = (data: LiveUpdateNameRequest): Promise<LiveUpdateNameResponse> => {
    return NetManager.inst.request('/digital-human-server-api/live/update-name', 'post', data, 'multipart/form-data');
}

/**
 * 数字人直播详情
 * 
 */
export const LiveDetail = (data: LiveDetailRequest): Promise<LiveDetailResponse> => {
    return NetManager.inst.request('/digital-human-server-api/live/detail', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 开始直播
 * 
 */
export const LiveStart = (data: LiveStartRequest): Promise<LiveStartResponse> => {
    return NetManager.inst.request('/digital-human-server-api/live/start', 'post', data, 'multipart/form-data');
}

/**
 * 查询直播状态
 * 
 */
export const LiveState = (data: LiveStateRequest): Promise<LiveStateResponse> => {
    return NetManager.inst.request('/digital-human-server-api/live/state', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 停止直播
 * 
 */
export const LiveStop = (data: LiveStopRequest): Promise<LiveStopResponse> => {
    return NetManager.inst.request('/digital-human-server-api/live/stop', 'post', data, 'multipart/form-data');
}

/**
 * 开始说话
 * 
 */
export const LiveStartSpeaker = (data: LiveStartSpeakerRequest): Promise<LiveStartSpeakerResponse> => {
    return NetManager.inst.request('/digital-human-server-api/live/start-speaker', 'post', data, 'multipart/form-data');
}

/**
 * 获取视频任务状态
 * 
 */
export const VideoTaskState = (data: VideoTaskStateRequest): Promise<VideoTaskStateResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video/task-state', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 数字人草稿保存
 * 
 */
export const VideoDraftSave = (data: VideoDraftSaveRequest): Promise<VideoDraftSaveResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-draft/save', 'post', data, 'application/json');
}

/**
 * 片段列表
 * 
 */
export const VideoDraftFragmentsPageList = (data: VideoDraftFragmentsPageListRequest): Promise<VideoDraftFragmentsPageListResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-draft-fragments/pageList', 'post', data, 'application/json');
}

/**
 * 片段保存
 * 
 */
export const VideoDraftFragmentsSave = (data: VideoDraftFragmentsSaveRequest): Promise<VideoDraftFragmentsSaveResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-draft-fragments/save', 'post', data, 'application/json');
}

/**
 * 片段删除
 * 
 */
export const VideoDraftFragmentsDelete = (data: VideoDraftFragmentsDeleteRequest): Promise<VideoDraftFragmentsDeleteResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-draft-fragments/delete', 'post', data, 'multipart/form-data');
}

/**
 * 新增背景图片
 * 
 */
export const VideoBgImageSave = (data: VideoBgImageSaveRequest): Promise<VideoBgImageSaveResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-bg-image/save', 'post', data, 'application/json');
}

/**
 * 数字人背景图片表删除
 * 
 */
export const VideoBgImageDelete = (data: VideoBgImageDeleteRequest): Promise<VideoBgImageDeleteResponse> => {
    return NetManager.inst.request('/digital-human-server-api/video-bg-image/delete', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 获取应用配置
 * 
 */
export const AppGetSetting = (data: AppGetSettingRequest): Promise<AppGetSettingResponse> => {
    return NetManager.inst.request('/digital-human-server-api/app/get-setting', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 数字人造型详情
 * 
 */
export const ProfilerDetail = (data: ProfilerDetailRequest): Promise<ProfilerDetailResponse> => {
    return NetManager.inst.request('/digital-human-server-api/profiler/detail', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 更新过期Token
 * 
 */
export const CompanyUserUpdateExpireToken = (data: CompanyUserUpdateExpireTokenRequest): Promise<CompanyUserUpdateExpireTokenResponse> => {
    return NetManager.inst.request('/user-server-api/company-user/update-expire-token', 'get', data, 'application/json;charset=utf-8');
}

/**
 * 数字人表情列表
 * 
 */
export const ExpressionPageList = (data: ExpressionPageListRequest): Promise<ExpressionPageListResponse> => {
    return NetManager.inst.request('/digital-human-server-api/expression/pageList', 'post', data, 'application/json');
}

/**
 * 数字人造型默认表情
 * 
 */
export const ExpressionDefault = (data: ExpressionDefaultRequest): Promise<ExpressionDefaultResponse> => {
    return NetManager.inst.request('/digital-human-server-api/expression/default', 'get', data, 'application/json');
}

/**
 * 创建访客
 * 
 */
export const GuestUserCreate = (data: GuestUserCreateRequest): Promise<GuestUserCreateResponse> => {
    return NetManager.inst.request('/user-server-api/guest-user/create', 'post', data, 'application/json');
}
