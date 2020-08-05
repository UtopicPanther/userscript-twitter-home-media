## Media mode for Twitter home (Beta)

Remove text-only tweets on the flow of my Twitter home and list.

Script need some time to startup. 

**Warning: There is no completely accurate way to detect whether a tweet contains pictures and other media. This script has a lot of redundant processing, and accidental deletion of tweets should be quite rare. But there may still be accidental deletion. If it is not acceptable, please do not use this script.**

How it works: Monitor page element changes. Then retrieve all tweets that do not contain pictures and other media (such as videos) and hide them.

I only tested in Firefox (disabled CSP) and Violentmonkey. User reports also work under Chrome.

## Twitter 主页面上的媒体模式 （Beta）

在我的 Twitter 主页和列表上删除纯文本的 Tweet。

脚本需要一定的时间才能启动。

**警告：不存在完全准确的方式探测 Tweet 是否包含图片和其他媒体。此脚本进行了大量冗余处理，出现误删除 Tweet 的情况应该是相当罕见的。但仍然可能出现误删除的情况，如果不能接受，请勿使用此脚本。**

工作原理：监听页面元素变动。然后检索不包含图片和其他媒体（如视频）的全部 Tweet，将它们隐藏。

我仅在 Firefox （禁用 CSP）和 Violentmonkey 环境下测试。用户报告也在 Chrome 下工作。

### Firefox notice

Due to CSP, maybe you need set `security.csp.enable` in your Firefox `about:config` to `false`

由于 CSP 限制，你可能需要在新版 Firefox 高级首选项 `about:config` 中将 `security.csp.enable` 设置为 `false`

### Install

Github: https://raw.githubusercontent.com/UtopicPanther/userscript-twitter-home-media/master/twitter-home-media.user.js

GreasyFork: https://greasyfork.org/en/scripts/408251-media-mode-for-twitter-home

### COPYING

Copyright (C) 2020 UtopicPanther

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

This script contains an additional exemption. When this script is
injected into the site with the original setting of `@match`, 
other user scripts running in the same space are not required to
be compatible with GPL 3.

这个脚本包含一个附加豁免。当此脚本被注入到原有设置 `@match` 的
站点时，不要求同一空间中运行的其他用户脚本与 GPL 3 兼容。
