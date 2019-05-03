-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2019-05-03 07:59:26
-- 服务器版本： 5.7.26
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cms`
--

-- --------------------------------------------------------

--
-- 表的结构 `answer`
--

CREATE TABLE IF NOT EXISTS `answer` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `user_id` varchar(64) DEFAULT NULL COMMENT '用户ID',
  `examination_id` varchar(64) DEFAULT NULL COMMENT '考试ID',
  `exam_record_id` varchar(64) DEFAULT NULL COMMENT '考试记录id',
  `subject_id` varchar(64) DEFAULT NULL COMMENT '题目ID',
  `answer` varchar(255) DEFAULT NULL COMMENT '答案',
  `creator` varchar(255) DEFAULT NULL COMMENT '创建人',
  `create_date` varchar(64) DEFAULT NULL COMMENT '创建时间',
  `modifier` varchar(255) DEFAULT NULL COMMENT '修改人',
  `modify_date` varchar(64) DEFAULT NULL COMMENT '修改时间',
  `del_flag` varchar(20) DEFAULT NULL COMMENT '删除标记',
  `application_code` varchar(64) DEFAULT NULL COMMENT '系统编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='考试记录答案表';

-- --------------------------------------------------------

--
-- 表的结构 `examination`
--

CREATE TABLE IF NOT EXISTS `examination` (
  `id` varchar(64) NOT NULL,
  `examination_name` varchar(255) DEFAULT NULL COMMENT '考试名称',
  `type` varchar(64) DEFAULT NULL COMMENT '考试类型',
  `attention` varchar(255) DEFAULT NULL COMMENT '考试注意事项',
  `start_time` varchar(64) DEFAULT NULL COMMENT '考试开始时间',
  `end_time` varchar(64) DEFAULT NULL COMMENT '考试结束时间',
  `duration` varchar(64) DEFAULT NULL COMMENT '考试持续时间',
  `total_score` varchar(64) DEFAULT NULL COMMENT '总分',
  `total_subject` varchar(64) DEFAULT NULL COMMENT '题目数',
  `status` varchar(64) DEFAULT NULL COMMENT '考试状态',
  `avatar` varchar(255) DEFAULT NULL COMMENT '封面',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `creator` varchar(255) DEFAULT NULL COMMENT '创建人',
  `create_date` varchar(64) DEFAULT NULL COMMENT '创建时间',
  `modifier` varchar(255) DEFAULT NULL COMMENT '修改人',
  `modify_date` varchar(64) DEFAULT NULL COMMENT '修改时间',
  `del_flag` varchar(20) DEFAULT NULL COMMENT '删除标记',
  `application_code` varchar(64) DEFAULT NULL COMMENT '系统编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- 表的结构 `exam_record`
--

CREATE TABLE IF NOT EXISTS `exam_record` (
  `id` varchar(64) NOT NULL,
  `user_id` varchar(64) DEFAULT NULL COMMENT '用户id',
  `examination_id` varchar(64) DEFAULT NULL COMMENT '考试id',
  `examination_name` varchar(255) DEFAULT NULL COMMENT '考试名称',
  `start_time` varchar(64) DEFAULT NULL COMMENT '开始时间',
  `end_time` varchar(64) DEFAULT NULL COMMENT '结束时间',
  `score` varchar(64) DEFAULT NULL COMMENT '成绩',
  `correct_number` varchar(64) DEFAULT NULL COMMENT '正确题目数量',
  `incorrect_number` varchar(64) DEFAULT NULL COMMENT '错误题目数量',
  `creator` varchar(255) DEFAULT NULL COMMENT '创建人',
  `create_date` varchar(64) DEFAULT NULL COMMENT '创建时间',
  `modifier` varchar(255) DEFAULT NULL COMMENT '修改人',
  `modify_date` varchar(64) DEFAULT NULL COMMENT '修改时间',
  `del_flag` varchar(20) DEFAULT NULL COMMENT '删除标记',
  `application_code` varchar(64) DEFAULT NULL COMMENT '系统编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='考试记录表';

-- --------------------------------------------------------

--
-- 表的结构 `incorrect_answer`
--

CREATE TABLE IF NOT EXISTS `incorrect_answer` (
  `id` varchar(64) NOT NULL,
  `user_id` varchar(64) DEFAULT NULL COMMENT '考生ID',
  `examination_id` varchar(64) DEFAULT NULL COMMENT '考试ID',
  `exam_record_id` varchar(64) DEFAULT NULL COMMENT '考试记录ID',
  `subject_id` varchar(64) DEFAULT NULL COMMENT '题目ID',
  `serial_number` varchar(64) DEFAULT NULL COMMENT '题目序号',
  `incorrect_answer` varchar(255) DEFAULT NULL COMMENT '错误答案',
  `creator` varchar(255) DEFAULT NULL COMMENT '创建人',
  `create_date` varchar(64) DEFAULT NULL COMMENT '创建时间',
  `modifier` varchar(255) DEFAULT NULL COMMENT '修改人',
  `modify_date` varchar(64) DEFAULT NULL COMMENT '修改时间',
  `del_flag` varchar(20) DEFAULT NULL COMMENT '删除标记',
  `application_code` varchar(64) DEFAULT NULL COMMENT '系统编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='错误答案表';

-- --------------------------------------------------------

--
-- 表的结构 `knowledge`
--

CREATE TABLE IF NOT EXISTS `knowledge` (
  `id` varchar(64) NOT NULL,
  `knowledge_name` varchar(255) DEFAULT NULL COMMENT '知识名称',
  `knowledge_desc` varchar(255) DEFAULT NULL COMMENT '知识描述',
  `attachment_id` varchar(255) DEFAULT NULL COMMENT '附件ID',
  `status` varchar(20) DEFAULT NULL COMMENT '状态',
  `creator` varchar(255) DEFAULT NULL COMMENT '创建人',
  `create_date` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `modifier` varchar(255) DEFAULT NULL COMMENT '修改人',
  `modify_date` varchar(255) DEFAULT NULL COMMENT '修改时间',
  `del_flag` varchar(20) DEFAULT NULL COMMENT '删除标记',
  `application_code` varchar(255) DEFAULT NULL COMMENT '系统编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='知识表';

-- --------------------------------------------------------

--
-- 表的结构 `oauths`
--

CREATE TABLE IF NOT EXISTS `oauths` (
  `id` int(200) NOT NULL COMMENT '唯一索引',
  `user_id` int(200) NOT NULL COMMENT '用户 ID',
  `oauth_type` varchar(500) NOT NULL COMMENT '第三方登陆类型 weibo、qq、wechat 等',
  `oauth_id` varchar(500) NOT NULL COMMENT '第三方 uid 、openid 等',
  `unionid` varchar(500) DEFAULT NULL COMMENT 'QQ / 微信同一主体下 Unionid 相同',
  `credential` varchar(500) DEFAULT NULL COMMENT '密码凭证 /access_token (目前更多是存储在缓存里)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='第三方登录表';

-- --------------------------------------------------------

--
-- 表的结构 `subject`
--

CREATE TABLE IF NOT EXISTS `subject` (
  `id` varchar(64) NOT NULL,
  `examination_id` varchar(64) DEFAULT NULL COMMENT '考试ID',
  `serial_number` int(64) DEFAULT NULL COMMENT '序号',
  `subject_name` varchar(255) DEFAULT NULL COMMENT '题目名称',
  `type` varchar(64) DEFAULT NULL COMMENT '题目类型',
  `content` varchar(255) DEFAULT NULL COMMENT '题目内容',
  `option_a` varchar(255) DEFAULT NULL COMMENT '选项a',
  `option_b` varchar(255) DEFAULT NULL COMMENT '选项b',
  `option_c` varchar(255) DEFAULT NULL COMMENT '选项c',
  `option_d` varchar(255) DEFAULT NULL COMMENT '选项d',
  `option_e` varchar(255) DEFAULT NULL COMMENT '选项e',
  `option_f` varchar(255) DEFAULT NULL COMMENT '选项f',
  `answer` varchar(255) DEFAULT NULL COMMENT '参考答案',
  `score` int(64) DEFAULT NULL COMMENT '分值',
  `analysis` varchar(255) DEFAULT NULL COMMENT '解析',
  `level` int(64) DEFAULT NULL COMMENT '难度等级',
  `creator` varchar(255) DEFAULT NULL COMMENT '创建人',
  `create_date` varchar(64) DEFAULT NULL COMMENT '创建时间',
  `modifier` varchar(255) DEFAULT NULL COMMENT '修改人',
  `modify_date` varchar(64) DEFAULT NULL COMMENT '修改时间',
  `del_flag` varchar(20) DEFAULT NULL COMMENT '删除标记',
  `application_code` varchar(64) DEFAULT NULL COMMENT '系统编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='考试题目表';

-- --------------------------------------------------------

--
-- 表的结构 `subject_bank`
--

CREATE TABLE IF NOT EXISTS `subject_bank` (
  `id` varchar(64) NOT NULL,
  `category_id` varchar(64) DEFAULT NULL COMMENT '分类ID',
  `serial_number` int(62) DEFAULT NULL COMMENT '题目序号',
  `subject_name` varchar(255) DEFAULT NULL COMMENT '题目名称',
  `type` varchar(64) DEFAULT NULL COMMENT '题目类型',
  `content` varchar(255) DEFAULT NULL COMMENT '题目内容',
  `option_a` varchar(255) DEFAULT NULL COMMENT '选项a',
  `option_b` varchar(255) DEFAULT NULL COMMENT '选项b',
  `option_c` varchar(255) DEFAULT NULL COMMENT '选项c',
  `option_d` varchar(255) DEFAULT NULL COMMENT '选项d',
  `option_e` varchar(255) DEFAULT NULL COMMENT '选项e',
  `option_f` varchar(255) DEFAULT NULL COMMENT '选项f',
  `answer` varchar(255) DEFAULT NULL COMMENT '参考答案',
  `score` int(64) DEFAULT NULL COMMENT '分值',
  `analysis` varchar(255) DEFAULT NULL COMMENT '解析',
  `level` varchar(64) DEFAULT NULL COMMENT '难度等级',
  `creator` varchar(255) DEFAULT NULL COMMENT '创建人',
  `create_date` varchar(64) DEFAULT NULL COMMENT '创建时间',
  `modifier` varchar(255) DEFAULT NULL COMMENT '修改人',
  `modify_date` varchar(64) DEFAULT NULL COMMENT '修改时间',
  `del_flag` varchar(20) DEFAULT NULL COMMENT '删除标记',
  `application_code` varchar(64) DEFAULT NULL COMMENT '系统编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='题库表';

-- --------------------------------------------------------

--
-- 表的结构 `subject_category`
--

CREATE TABLE IF NOT EXISTS `subject_category` (
  `id` varchar(64) NOT NULL COMMENT '主键',
  `category_name` varchar(255) DEFAULT NULL COMMENT '分类名称',
  `category_desc` varchar(255) DEFAULT NULL COMMENT '分类描述',
  `parent_id` varchar(64) DEFAULT NULL COMMENT '父分类ID',
  `sort` varchar(64) DEFAULT NULL COMMENT '排序号',
  `creator` varchar(255) DEFAULT NULL COMMENT '创建人',
  `create_date` varchar(64) DEFAULT NULL COMMENT '创建时间',
  `modifier` varchar(255) DEFAULT NULL COMMENT '修改人',
  `modify_date` varchar(64) DEFAULT NULL COMMENT '修改时间',
  `del_flag` varchar(20) DEFAULT NULL COMMENT '删除标记',
  `application_code` varchar(64) DEFAULT NULL COMMENT '系统编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='题目类型表';

-- --------------------------------------------------------

--
-- 表的结构 `sys_attachment`
--

CREATE TABLE IF NOT EXISTS `sys_attachment` (
  `id` varchar(64) NOT NULL,
  `attach_name` varchar(255) DEFAULT NULL COMMENT '附件名称',
  `attach_size` varchar(255) DEFAULT NULL COMMENT '附件大小',
  `group_name` varchar(255) DEFAULT NULL COMMENT '组名称',
  `fast_file_id` varchar(255) DEFAULT NULL COMMENT '文件ID',
  `busi_id` varchar(255) DEFAULT NULL COMMENT '业务ID',
  `busi_module` varchar(255) DEFAULT NULL COMMENT '业务模块',
  `busi_type` varchar(255) DEFAULT NULL COMMENT '业务类型 0-普通，1-头像',
  `creator` varchar(255) DEFAULT NULL COMMENT '创建人',
  `create_date` varchar(64) DEFAULT NULL COMMENT '创建时间',
  `modifier` varchar(255) DEFAULT NULL COMMENT '修改人',
  `modify_date` varchar(64) DEFAULT NULL COMMENT '修改时间',
  `del_flag` varchar(20) DEFAULT NULL COMMENT '删除标记',
  `application_code` varchar(64) DEFAULT NULL COMMENT '系统编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='附件表';

-- --------------------------------------------------------

--
-- 表的结构 `sys_log`
--

CREATE TABLE IF NOT EXISTS `sys_log` (
  `id` varchar(32) NOT NULL COMMENT '主键',
  `type` varchar(20) DEFAULT NULL COMMENT '日志类型',
  `title` varchar(2000) DEFAULT NULL COMMENT '日志标题',
  `ip` varchar(255) DEFAULT NULL COMMENT '操作用户的IP地址',
  `user_agent` varchar(255) DEFAULT NULL COMMENT '操作用户代理信息',
  `request_uri` varchar(255) DEFAULT NULL COMMENT '操作的URI',
  `method` varchar(255) DEFAULT NULL COMMENT '操作的方式',
  `params` varchar(255) DEFAULT NULL COMMENT '操作提交的数据',
  `exception` varchar(2000) DEFAULT NULL COMMENT '异常信息',
  `service_id` varchar(255) DEFAULT NULL COMMENT '服务ID',
  `time` varchar(255) DEFAULT NULL COMMENT '耗时',
  `creator` varchar(255) DEFAULT NULL COMMENT '创建人',
  `create_date` varchar(64) DEFAULT NULL COMMENT '创建时间',
  `modifier` varchar(255) DEFAULT NULL COMMENT '修改人',
  `modify_date` varchar(64) DEFAULT NULL COMMENT '修改时间',
  `del_flag` varchar(20) DEFAULT NULL COMMENT '删除标记',
  `application_code` varchar(64) DEFAULT NULL COMMENT '系统编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='系统日志';

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(200) NOT NULL COMMENT '用户唯一索引',
  `name` varchar(200) NOT NULL COMMENT '用户昵称',
  `avatar_url` varchar(500) DEFAULT NULL COMMENT '头像地址',
  `phone` varchar(50) DEFAULT NULL COMMENT '手机号',
  `password` varchar(200) DEFAULT NULL COMMENT '密码',
  `user_type` int(5) NOT NULL DEFAULT '9' COMMENT '用户类型，0超管，9权限最低的用户',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_at` timestamp NULL DEFAULT NULL COMMENT '更新时间',
  `is_delete` int(2) NOT NULL DEFAULT '0' COMMENT '标记用户是否已经删除'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='用户表';

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `name`, `avatar_url`, `phone`, `password`, `user_type`, `create_at`, `update_at`, `is_delete`) VALUES
(1, 'admin', NULL, NULL, 'admin', 0, '2019-05-03 07:50:32', NULL, 0);

-- --------------------------------------------------------

--
-- 表的结构 `users_extends`
--

CREATE TABLE IF NOT EXISTS `users_extends` (
  `id` int(200) NOT NULL COMMENT '唯一索引',
  `user_id` int(200) NOT NULL COMMENT '用户 ID',
  `field` varchar(50) NOT NULL COMMENT '扩展字段',
  `value` varchar(500) DEFAULT NULL COMMENT '扩展字段值'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='用户信息扩展表';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `index_answer` (`user_id`,`examination_id`,`subject_id`) USING BTREE COMMENT '答题索引';

--
-- Indexes for table `examination`
--
ALTER TABLE `examination`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `exam_record`
--
ALTER TABLE `exam_record`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `incorrect_answer`
--
ALTER TABLE `incorrect_answer`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `knowledge`
--
ALTER TABLE `knowledge`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `oauths`
--
ALTER TABLE `oauths`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `subject_bank`
--
ALTER TABLE `subject_bank`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `subject_category`
--
ALTER TABLE `subject_category`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `sys_attachment`
--
ALTER TABLE `sys_attachment`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `sys_log`
--
ALTER TABLE `sys_log`
  ADD PRIMARY KEY (`id`) USING BTREE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
