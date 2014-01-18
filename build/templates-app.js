angular.module('templates-app', ['main/template/login.tpl.html', 'main/template/main.tpl.html', 'main/template/menu_left.tpl.html', 'menu_left/template/attribute.tpl.html', 'menu_left/template/detail.tpl.html', 'menu_left/template/display.tpl.html', 'menu_left/template/draw_pad.tpl.html', 'menu_left/template/drive.tpl.html', 'menu_left/template/drive_quiz.tpl.html', 'menu_left/template/drive_slide.tpl.html', 'menu_left/template/home_student.tpl.html', 'menu_left/template/home_teacher.tpl.html', 'menu_left/template/quiz_student.tpl.html', 'menu_left/template/quiz_teacher.tpl.html', 'menu_left/template/slide_pad.tpl.html', 'menu_left/template/tool_bar.tpl.html', 'menu_right/template/chat.tpl.html', 'menu_right/template/group.tpl.html', 'modal/template/attribute.tpl.html', 'modal/template/detail.tpl.html', 'modal/template/display.tpl.html', 'modal/template/save.tpl.html']);

angular.module("main/template/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/template/login.tpl.html",
    "<div class=\"modal-dialog\">\n" +
    "	<div class=\"modal-content width-60 auto-margin\">\n" +
    "\n" +
    "		<div class=\"modal-header\">\n" +
    "			<h5 class=\"ligther bigger-160\">Login</h5>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"modal-body\">\n" +
    "			<span id=\"signinButton\">\n" +
    "				<span\n" +
    "				class=\"g-signin\"\n" +
    "				data-callback=\"signinCallback\"\n" +
    "				data-clientid=\"459319943069-8qa7ada6rk80bqrmmnmdr37n08ejnke0.apps.googleusercontent.com\"\n" +
    "				data-cookiepolicy=\"single_host_origin\"\n" +
    "				data-requestvisibleactions=\"http://schemas.google.com/AddActivity\"\n" +
    "				data-scope=\"https://www.googleapis.com/auth/plus.login\n" +
    "				https://www.googleapis.com/auth/userinfo.email\n" +
    "				https://www.googleapis.com/auth/drive\">\n" +
    "			</span>\n" +
    "		</span>\n" +
    "\n" +
    "	</div>\n" +
    "</div>  ");
}]);

angular.module("main/template/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/template/main.tpl.html",
    "<div ng-controller=\"MainCtrl\" re-size>\n" +
    "\n" +
    "	<menu-left class=\"navbar navbar-fixed-top\"></menu-left>\n" +
    "	\n" +
    "	<div class=\"fluid-container\">\n" +
    "		<div class=\"row fit-height\">\n" +
    "			\n" +
    "			<div class=\"well fit-height\">\n" +
    "				<ui-view></ui-view>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("main/template/menu_left.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/template/menu_left.tpl.html",
    "<!-- <div class=\"navbar-container\"> -->\n" +
    "<div class=\"navbar-header pull-left\">\n" +
    "	<ul class=\"nav ace-nav\">\n" +
    "		<li class=\"nav-tab\">\n" +
    "			<a class=\"home_page pink\" ui-sref=\"main.home\"></a>\n" +
    "		</li>\n" +
    "		<li class=\"nav-tab\">\n" +
    "			<a class=\"drive_page green\" ui-sref=\"main.drive\"></a>\n" +
    "		</li>\n" +
    "		<li class=\"nav-tab\">\n" +
    "			<a class=\"draw_page blue\" ui-sref=\"main.draw\"></a>\n" +
    "		</li>\n" +
    "		<li class=\"nav-tab\">\n" +
    "			<a class=\"slide_page yellow\" ui-sref=\"main.slide\"></a>\n" +
    "		</li>\n" +
    "		<li class=\"nav-tab\">\n" +
    "			<a class=\"quiz_page red\" ui-sref=\"main.quiz\"></a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "<!-- 		<ul class=\"nav ace-nav\">\n" +
    "			<li class=\"nav-tab light-orange\"><a ui-sref=\"main.home\">Home</a></li>\n" +
    "			<li class=\"nav-tab light-purple\"><a ui-sref=\"main.drive\">Drive</a></li>\n" +
    "			<li class=\"nav-tab purple\"><a ui-sref=\"main.draw\">Draw</a></li>\n" +
    "			<li class=\"nav-tab dark-opaque\"><a ui-sref=\"main.slide\">Slide</a></li>\n" +
    "			<li class=\"nav-tab grey\"><a ui-sref=\"main.quiz\">Quiz</a></li>\n" +
    "		</ul> -->\n" +
    "	</div>\n" +
    "	<div class=\"navbar-header pull-right white bigger-120\">\n" +
    "		<span class=\"align-middle\">{{roomName}}</span>\n" +
    "		<span class=\"v-line align-middle\"></span>\n" +
    "		<span class=\"align-middle\">{{userName}}</span>\n" +
    "		<span class=\"v-line align-middle\"></span>\n" +
    "		<div id=\"logout\" class=\"btn btn-danger inline nav-tab\" ng-click=\"logout()\">\n" +
    "			<i class=\"icon-off no-margin bigger-140\"></i>\n" +
    "			<span class=\"bigger-110\">logout</span>\n" +
    "		</div>\n" +
    "		<iframe id=\"logout\" ng-src=\"{{url}}\" style=\"display:none;\"></iframe>\n" +
    "	</div>\n" +
    "<!-- </div> -->");
}]);

angular.module("menu_left/template/attribute.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/attribute.tpl.html",
    "<!-- <div class=\"inline color\" colorpicker=\"rgba\" colorpicker-position=\"top\" ng-model=\"attr\"></div> -->\n" +
    "<div class=\"modal-dialog\">\n" +
    "	<div class=\"modal-content\">\n" +
    "		<div class=\"modal-body\">\n" +
    "\n" +
    "			<!-- <div class=\"inline width-75 fit-height\"> -->	\n" +
    "			<!-- <div class=\"widget-box\">\n" +
    "				<div class=\"widget-header header-color-blue\">\n" +
    "					<h5 class=\"bigger lighter\">Colors</h5>\n" +
    "				</div>\n" +
    "				<div class=\"widget-body\"> -->\n" +
    "					<div class=\"alert alert-info\">\n" +
    "						<picker color=\"selector.color\"></picker>\n" +
    "					</div>\n" +
    "				<!--</div>\n" +
    "			</div> -->\n" +
    "			<label>\n" +
    "				Alpha: <span>{{selector.alpha}}</span>\n" +
    "			</label>\n" +
    "			<div class=\"width-100\" slider max=\"100\" size=\"selector.alpha\">\n" +
    "			</div>\n" +
    "\n" +
    "			<hr>\n" +
    "\n" +
    "			<label>\n" +
    "				Stroke size: <span>{{selector.size}}</span>\n" +
    "			</label>\n" +
    "			<div class=\"width-100 ui-slider-dark\" slider max=\"50\" size=\"selector.size\">\n" +
    "			</div>\n" +
    "			<!-- </div> -->\n" +
    "\n" +
    "		</div>\n" +
    "		<div class=\"modal-footer\">\n" +
    "			<button class=\"btn btn-xs btn-warning\" ng-click=\"close()\">\n" +
    "				<span class=\"bigger-150\">&#10006; Close</span>\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<!-- <ul id=\"simple-colorpicker-1\" class=\"hide\">\n" +
    "	<li><span style=\"#ac725e\">#ac725e</span></li>\n" +
    "	<li><span style=\"#d06b64\">#d06b64</span></li>\n" +
    "	<li><span style=\"#f83a22\">#f83a22</span></li>\n" +
    "	<li><span style=\"#fa573c\">#fa573c</span></li>\n" +
    "	<li><span style=\"#ff7537\">#ff7537</span></li>\n" +
    "	<li><span style=\"#ffad46\">#ffad46</span></li>\n" +
    "	<li><span style=\"#42d692\">#42d692</span></li>\n" +
    "	<li><span style=\"#16a765\">#16a765</span></li>\n" +
    "	<li><span style=\"#7bd148\">#7bd148</span></li>\n" +
    "	<li><span style=\"#b3dc6c\">#b3dc6c</span></li>\n" +
    "	<li><span style=\"#fbe983\">#fbe983</span></li>\n" +
    "	<li><span style=\"#fad165\">#fad165</span></li>\n" +
    "	<li><span style=\"#92e1c0\">#92e1c0</span></li>\n" +
    "	<li><span style=\"#9fe1e7\">#9fe1e7</span></li>\n" +
    "	<li><span style=\"#9fc6e7\">#9fc6e7</span></li>\n" +
    "	<li><span style=\"#4986e7\">#4986e7</span></li>\n" +
    "	<li><span style=\"#9a9cff\">#9a9cff</span></li>\n" +
    "	<li><span style=\"#b99aff\">#b99aff</span></li>\n" +
    "	<li><span style=\"#c2c2c2\">#c2c2c2</span></li>\n" +
    "	<li><span style=\"#cabdbf\">#cabdbf</span></li>\n" +
    "	<li><span style=\"#cca6ac\">#cca6ac</span></li>\n" +
    "	<li><span style=\"#f691b2\">#f691b2</span></li>\n" +
    "	<li><span style=\"#cd74e6\">#cd74e6</span></li>\n" +
    "	<li><span style=\"#a47ae2\">#a47ae2</span></li>\n" +
    "	<li><span style=\"#555\">#555</span></li>\n" +
    "</ul> -->\n" +
    "\n" +
    "<!-- <select picker>\n" +
    "	<span value=\"ffffff\">#ffffff</span>\n" +
    "	<span value=\"ffccc9\">#ffccc9</span>\n" +
    "	<span value=\"ffce93\">#ffce93</span>\n" +
    "	<span value=\"fffc9e\">#fffc9e</span>\n" +
    "	<span value=\"ffffc7\">#ffffc7</span>\n" +
    "	<span value=\"9aff99\">#9aff99</span>\n" +
    "	<span value=\"96fffb\">#96fffb</span>\n" +
    "	<span value=\"cdffff\">#cdffff</span>\n" +
    "	<span value=\"cbcefb\">#cbcefb</span>\n" +
    "	<span value=\"cfcfcf\">#cfcfcf</span>\n" +
    "	<span value=\"fd6864\">#fd6864</span>\n" +
    "	<span value=\"fe996b\">#fe996b</span>\n" +
    "	<span value=\"fffe65\">#fffe65</span>\n" +
    "	<span value=\"fcff2f\">#fcff2f</span>\n" +
    "	<span value=\"67fd9a\">#67fd9a</span>\n" +
    "	<span value=\"38fff8\">#38fff8</span>\n" +
    "	<span value=\"68fdff\">#68fdff</span>\n" +
    "	<span value=\"9698ed\">#9698ed</span>\n" +
    "	<span value=\"c0c0c0\">#c0c0c0</span>\n" +
    "	<span value=\"fe0000\">#fe0000</span>\n" +
    "	<span value=\"f8a102\">#f8a102</span>\n" +
    "	<span value=\"ffcc67\">#ffcc67</span>\n" +
    "	<span value=\"f8ff00\">#f8ff00</span>\n" +
    "	<span value=\"34ff34\">#34ff34</span>\n" +
    "	<span value=\"68cbd0\">#68cbd0</span>\n" +
    "	<span value=\"34cdf9\">#34cdf9</span>\n" +
    "	<span value=\"6665cd\">#6665cd</span>\n" +
    "	<span value=\"9b9b9b\">#9b9b9b</span>\n" +
    "	<span value=\"cb0000\">#cb0000</span>\n" +
    "	<span value=\"f56b00\">#f56b00</span>\n" +
    "	<span value=\"ffcb2f\">#ffcb2f</span>\n" +
    "	<span value=\"ffc702\">#ffc702</span>\n" +
    "	<span value=\"32cb00\">#32cb00</span>\n" +
    "	<span value=\"00d2cb\">#00d2cb</span>\n" +
    "	<span value=\"3166ff\">#3166ff</span>\n" +
    "	<span value=\"6434fc\">#6434fc</span>\n" +
    "	<span value=\"656565\">#656565</span>\n" +
    "	<span value=\"9a0000\">#9a0000</span>\n" +
    "	<span value=\"ce6301\">#ce6301</span>\n" +
    "	<span value=\"cd9934\">#cd9934</span>\n" +
    "	<span value=\"999903\">#999903</span>\n" +
    "	<span value=\"009901\">#009901</span>\n" +
    "	<span value=\"329a9d\">#329a9d</span>\n" +
    "	<span value=\"3531ff\">#3531ff</span>\n" +
    "	<span value=\"6200c9\">#6200c9</span>\n" +
    "	<span value=\"343434\">#343434</span>\n" +
    "	<span value=\"680100\">#680100</span>\n" +
    "	<span value=\"963400\">#963400</span>\n" +
    "	<span value=\"986536\">#986536</span>\n" +
    "	<span value=\"646809\">#646809</span>\n" +
    "	<span value=\"036400\">#036400</span>\n" +
    "	<span value=\"34696d\">#34696d</span>\n" +
    "	<span value=\"00009b\">#00009b</span>\n" +
    "	<span value=\"303498\">#303498</span>\n" +
    "	<span value=\"000000\">#000000</span>\n" +
    "	<span value=\"330001\">#330001</span>\n" +
    "	<span value=\"643403\">#643403</span>\n" +
    "	<span value=\"663234\">#663234</span>\n" +
    "	<span value=\"343300\">#343300</span>\n" +
    "	<span value=\"013300\">#013300</span>\n" +
    "	<span value=\"003532\">#003532</span>\n" +
    "	<span value=\"010066\">#010066</span>\n" +
    "	<span value=\"340096\">#340096</span>\n" +
    "</select> -->\n" +
    "\n" +
    "");
}]);

angular.module("menu_left/template/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/detail.tpl.html",
    "<div class=\"modal-dialog\">\n" +
    "	<div class=\"modal-content\">\n" +
    "		<div class=\"modal-body\">\n" +
    "			<div class=\"bigger-180 inline\">\n" +
    "				<img class=\"width-30  pull-left\" ng-src=\"{{room.display}}\"/>\n" +
    "				<div class=\"margin-30 pull-left\">\n" +
    "					<span class=\"bolder\">Name :</span>\n" +
    "					<span>{{room.name}}</span>\n" +
    "					<br>\n" +
    "					<span class=\"bolder\">Owner :</span>\n" +
    "					<span>{{room.owner}}</span>\n" +
    "					<br>\n" +
    "					<button class=\"inline btn btn-success icon-ok\" ng-click=\"ok()\">Join</button>\n" +
    "					<button class=\"inline btn btn-warning icon-remove\" ng-click=\"cancel()\">Cancel</button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"bigger-180\">\n" +
    "				<span class=\"bolder\">Description :</span><br/>\n" +
    "				<span class=\"margin-10\">{{room.description}}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("menu_left/template/display.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/display.tpl.html",
    "<div class=\"modal-dialog\">\n" +
    "	<div class=\"modal-content\">\n" +
    "		<div class=\"modal-body\">\n" +
    "			<img ng-src=\"{{url+item}}\" ng-repeat=\"item in items\" ng-click=\"select($index)\">\n" +
    "		</div>\n" +
    "		<div class=\"modal-footer\">\n" +
    "			<button class=\"btn btn-success icon-ok bigger-130\" ng-click=\"ok()\"> Ok</button>\n" +
    "			<button class=\"btn btn-warning icon-remove bigger-130\" ng-click=\"close()\"> Cancel</button>\n" +
    "		</div>	\n" +
    "	</div>\n" +
    "</div>'");
}]);

angular.module("menu_left/template/draw_pad.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/draw_pad.tpl.html",
    "<div ng-swipe-up=\"checkToolSwipe(false)\" ng-swipe-down=\"checkToolSwipe(true)\" ng-swipe-left=\"checkMenuSwipe(true)\" ng-swipe-right=\"checkMenuSwipe(false)\">\n" +
    "	<div style=\"display:none;\">\n" +
    "		<canvas id=\"data\"/>\n" +
    "	</div>\n" +
    "	<div is-visible=\"isDesktop\" class=\"visible-lg\"></div>\n" +
    "	<div class=\"row\">\n" +
    "\n" +
    "		<div class=\"col-lg-10 pad\">\n" +
    "			<canvas id=\"draw\" draw-pad text=\"{{text}}\" send=\"true\" fit-size></canvas>\n" +
    "			<input type=\"text\" id=\"textbox\" ng-model=\"text\">\n" +
    "			<tool-bar class=\"toolbar\" tool=\"tool\" is-hide=\"{{hideTool&&!isDesktop}}\"></tool-bar>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-if=\"isDesktop\" class=\"well col-lg-2 fit-height\">\n" +
    "			<group></group>\n" +
    "		</div>\n" +
    "		<div ng-if=\"!isDesktop\" class=\"width-35\">\n" +
    "			<div class=\"nav-right\">\n" +
    "				<div class=\"btn btn-app btn-xs btn-warning ace-settings-btn\" ng-click=\"showMenu = !showMenu\">\n" +
    "					<i class=\"icon-tag bigger-150\"></i>\n" +
    "				</div>\n" +
    "				<div class=\"ace-settings-box fit-height\" ng-class=\"{open: showMenu}\">\n" +
    "					<group></group>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("menu_left/template/drive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/drive.tpl.html",
    "<div class=\"card\">\n" +
    "	<div class=\"widget-box transparent\">\n" +
    "		<div class=\"widget-header\">\n" +
    "			<div class=\"inline\" ng-init=\"tab = 'slide'\">\n" +
    "				<button class=\"btn btn-app btn-xs no-radius btn-light\" ng-click=\"tab = 'slide'\">\n" +
    "					Slide\n" +
    "				</button>\n" +
    "				<button class=\"btn btn-app btn-xs no-radius btn-light\" ng-click=\"tab = 'quiz'\" ng-show=\"hasQuiz\">\n" +
    "					Quiz\n" +
    "				</button>\n" +
    "			</div>\n" +
    "			<div class=\"widget-toolbar\">\n" +
    "				<button class=\"btn btn-xs btn-yellow bigger\" ng-click=\"saveSlide()\">\n" +
    "					<i class=\"icon-save bigger-180\"></i>\n" +
    "					<span class=\"bigger-140\"> Slide</span>\n" +
    "				</button>\n" +
    "				<button class=\"btn btn-xs btn-yellow bigger\" ng-click=\"saveDraw()\">\n" +
    "					<i class=\"icon-save bigger-180\"></i>\n" +
    "					<span class=\"bigger-140\"> Draw</span>\n" +
    "				</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"widget-body\" ng-switch on=\"tab\">\n" +
    "			<drive-slide ng-switch-when=\"slide\"></drive-slide>\n" +
    "			<drive-quiz ng-switch-when=\"quiz\"></drive-quiz>\n" +
    "		</div>\n" +
    "	</div> \n" +
    "</div>");
}]);

angular.module("menu_left/template/drive_quiz.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/drive_quiz.tpl.html",
    "<div class=\"list fit-height\" scroll-bar>\n" +
    "\n" +
    "	<ul class=\"item-list\">\n" +
    "		<li class=\"item-grey clearfix\" ng-class=\"{selected: selected==$index}\" ng-repeat=\"data in datas\" ng-click=\"select($index)\">\n" +
    "			<i class=\"icon-list-alt bigger-160 align-middle\"></i>\n" +
    "			<span>{{data.title}}</span>\n" +
    "			<span class=\"pull-right\">{{data.date}}</span>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "\n" +
    "</div>");
}]);

angular.module("menu_left/template/drive_slide.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/drive_slide.tpl.html",
    "\n" +
    "<div style=\"display:none;\">\n" +
    "	<canvas id=\"data\"/>\n" +
    "</div>		\n" +
    "<div class=\"list fit-height\" scroll-bar>\n" +
    "	<ul class=\"item-list\">\n" +
    "		<li class=\"item-grey clearfix\" ng-class=\"{selected: selected==data.id}\" ng-repeat=\"data in datas\" ng-click=\"select($index)\">\n" +
    "			<img ng-src=\"{{data.iconLink}}\">\n" +
    "			<span>{{data.title}}</span>\n" +
    "			<span class=\"pull-right\">{{toDate(data.createdDate)}}</span>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("menu_left/template/home_student.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/home_student.tpl.html",
    "<!-- <div class=\"card\"> -->\n" +
    "	<div class=\"widget-box transparent fit-height\">\n" +
    "\n" +
    "		<div class=\"widget-header\">\n" +
    "			<h5 class=\"bigger-160\">Room</h5>\n" +
    "\n" +
    "			<div class=\"widget-toolbar width-10 align-center\">\n" +
    "				<a href=\"\">\n" +
    "					<i class=\"icon-refresh bigger-210\" ng-click=\"list()\"></i>\n" +
    "				</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"widget-body\" style=\"position:relative;top:0;bottom:0;\">\n" +
    "			<div class=\"list fit-height\" scroll-bar>\n" +
    "				<div class=\"inline card room align-center\" ng-repeat=\"room in rooms\" ng-class=\"{'selected': selected==$index}\" ng-click=\"showDetail($index)\">\n" +
    "					<img class=\"width-100\" ng-src=\"{{room.display}}\"/>\n" +
    "					<hr>\n" +
    "					<div class=\"inline bigger-140 word-warp width-100\">{{room.name}}</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "	</div>\n" +
    "<!-- </div> -->\n" +
    "");
}]);

angular.module("menu_left/template/home_teacher.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/home_teacher.tpl.html",
    "<div class=\"align-center\">\n" +
    "	<div class=\"inline card\">\n" +
    "		<div class=\"inline\">\n" +
    "			<img class=\"display pull-left\" ng-src=\"{{room.display}}\" ng-click=\"selectDisplay()\"/>\n" +
    "			<div class=\"margin-30 pull-left\">\n" +
    "				<label class=\"bigger-180 bolder\">Name : </label>\n" +
    "				<input type=\"text\" maxlength=\"18\" ng-model=\"room.name\">\n" +
    "				<hr>\n" +
    "				<button class=\"btn btn-info icon-plus bigger-130\" ng-click=\"create()\"> Create Room</button>\n" +
    "				<button class=\"btn btn-warning icon-remove bigger-130\" ng-click=\"close()\"> Close Room</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<br>\n" +
    "		<div class=\"inline\">\n" +
    "			<label class=\"bigger-180 bolder\">Description</label>\n" +
    "			<br>\n" +
    "			<textarea style=\"max-width:400;width:400;height:20%\" placeholder=\"Input detail\" ng-model=\"room.description\"></textarea>	\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("menu_left/template/quiz_student.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/quiz_student.tpl.html",
    "<div class=\"widget-box\">\n" +
    "	<div ng-hide=\"isEnd\">\n" +
    "		<div class=\"widget-header header-color-dark\">\n" +
    "			<h5 class=\"bigger-180 lighter\">{{index}}. {{question}}</h5>\n" +
    "		</div>\n" +
    "		<div class=\"widget-body\">\n" +
    "			<div class=\"widget-main padding-5 answer\" ng-repeat=\"ans in answer\">\n" +
    "				<input class=\"ace\" type=\"radio\" name=\"answer\" ng-click=\"select($index)\" ng-checked=\"$index==0\"/>\n" +
    "				<span class=\"lbl bigger-180\">  {{ans}}</span>\n" +
    "			</div>\n" +
    "			<div class=\"widget-toolbox clearfix\">\n" +
    "				<button class=\"btn pull-right\" ng-click=\"next()\">Next</button>\n" +
    "			</div>\n" +
    "		</div>    \n" +
    "	</div>\n" +
    "	<div ng-show=\"isEnd\">\n" +
    "		<div class=\"widget-header header-color-dark\">\n" +
    "			<h5 class=\"bigger-180 lighter\">Finish</h5>\n" +
    "		</div>\n" +
    "		<div class=\"widget-body\" >\n" +
    "			<div class=\"widget-main answer\">\n" +
    "				Finish!!!!\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("menu_left/template/quiz_teacher.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/quiz_teacher.tpl.html",
    "<div class=\"fit-height\">\n" +
    "	<ul class=\"pagination position-absolute\">\n" +
    "		<li ng-class=\"{active: current==$index}\" ng-repeat=\"q in quiz\" ng-click=\"changeIndex($index)\">\n" +
    "			<a>{{$index+1}}</a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "	<highchart class=\"fit-height\" config=\"chartConfig\" ></highchart>\n" +
    "</div>");
}]);

angular.module("menu_left/template/slide_pad.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/slide_pad.tpl.html",
    "<div ng-swipe-up=\"checkToolSwipe(false)\" ng-swipe-down=\"checkToolSwipe(true)\" ng-swipe-left=\"checkMenuSwipe(true)\" ng-swipe-right=\"checkMenuSwipe(false)\">\n" +
    "\n" +
    "	<div is-visible=\"isDesktop\" class=\"visible-lg\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"pad col-lg-10\">\n" +
    "			<div class=\"control-area\" ng-show=\"isShow\" ng-click=\"prevIndex(false)\"></div>\n" +
    "			<div class=\"control-area\" ng-show=\"isShow\" ng-click=\"nextIndex(false)\"></div>\n" +
    "			<div class=\"mirror\">\n" +
    "				<canvas id=\"mirror-1\" draw-pad text=\"{{text}}\" send=\"isSend\">\n" +
    "				</canvas>\n" +
    "				<input type=\"text\" id=\"textbox\" ng-model=\"text\">\n" +
    "			</div>\n" +
    "			<div class=\"slide-pad\" fit-size>\n" +
    "				<slide-pad send=\"isSend\"></slide-pad>\n" +
    "			</div>\n" +
    "			<tool-bar class=\"toolbar\" tool=\"tool\" is-hide=\"{{hideTool&&!isDesktop}}\"></tool-bar>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-if=\"isDesktop\" class=\"well col-lg-2 fit-height\">\n" +
    "			<chat></chat>\n" +
    "		</div>\n" +
    "		<div ng-if=\"!isDesktop\" class=\"width-35\">\n" +
    "			<div class=\"nav-right\">\n" +
    "				<div class=\"btn btn-app btn-xs btn-warning ace-settings-btn\" ng-click=\"showMenu=!showMenu\">\n" +
    "					<i class=\"icon-chat\"></i>\n" +
    "				</div>\n" +
    "				<div class=\"ace-settings-box fit-height\" ng-class=\"{open: showMenu}\">\n" +
    "					<chat></chat>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	\n" +
    "</div>");
}]);

angular.module("menu_left/template/tool_bar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/tool_bar.tpl.html",
    "<div ng-hide=\"isHide\">	\n" +
    "\n" +
    "	<div class=\"width-40 pull-left\">\n" +
    "		<div class=\"tool inline btn btn-xs btn-primary width-25\" ng-repeat=\"tool in toolLeft\" ng-click=\"changeToolLeft($index)\" ng-class=\"{active: leftSelected==$index}\">\n" +
    "			<span class=\"tool\" ng-class=\"{'icon-{{tool}}': true}\"></span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<selector class=\"width-20 pull-left attr\"></selector>		\n" +
    "\n" +
    "	<div class=\"width-40 pull-left\">\n" +
    "		<div class=\"tool inline btn btn-xs btn-primary width-25\" ng-repeat=\"tool in toolRight\" ng-click=\"changeToolRight($index)\" ng-class=\"{active: rightSelected==$index}\">\n" +
    "			<span class=\"tool\" ng-class=\"{'icon-{{tool}}': true}\"></span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("menu_right/template/chat.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_right/template/chat.tpl.html",
    "	<div class=\"chat-box list\" scroll-bar watch=\"msgs\">\n" +
    "		<!-- <div ng-repeat=\"msg in msgs track by $index\"> -->\n" +
    "		<div>\n" +
    "			<img ng-src=\"{{msg}}\" class=\"emotion block\" ng-repeat=\"msg in msgs track by $index\">\n" +
    "		</div>\n" +
    "		<!-- </div> -->\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"emoticon-box\" scroll-bar x=\"true\" y=\"false\">\n" +
    "		<img class=\"fit-height\" ng-repeat=\"emo in emotions\" ng-src=\"{{url+emo}}\" ng-click=\"select($index)\">\n" +
    "	</div>\n" +
    "");
}]);

angular.module("menu_right/template/group.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_right/template/group.tpl.html",
    "<div class=\"list fit-height\" scroll-bar>		\n" +
    "	<div ng-repeat=\"(key,group) in groups\">\n" +
    "		<img class=\"thumbnail\" ng-src=\"{{group.image}}\" ng-click=\"toggle(key)\"/>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modal/template/attribute.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modal/template/attribute.tpl.html",
    "<!-- <div class=\"inline color\" colorpicker=\"rgba\" colorpicker-position=\"top\" ng-model=\"attr\"></div> -->\n" +
    "<div class=\"modal-dialog\">\n" +
    "	<div class=\"modal-content\">\n" +
    "		<div class=\"modal-body\">\n" +
    "\n" +
    "			<!-- <div class=\"inline width-75 fit-height\"> -->	\n" +
    "			<!-- <div class=\"widget-box\">\n" +
    "				<div class=\"widget-header header-color-blue\">\n" +
    "					<h5 class=\"bigger lighter\">Colors</h5>\n" +
    "				</div>\n" +
    "				<div class=\"widget-body\"> -->\n" +
    "					<div class=\"alert alert-info\">\n" +
    "						<picker color=\"selector.color\"></picker>\n" +
    "					</div>\n" +
    "				<!--</div>\n" +
    "			</div> -->\n" +
    "			<label>\n" +
    "				Alpha: <span>{{selector.alpha}}</span>\n" +
    "			</label>\n" +
    "			<div class=\"width-100\" slider max=\"100\" size=\"selector.alpha\">\n" +
    "			</div>\n" +
    "\n" +
    "			<hr>\n" +
    "\n" +
    "			<label>\n" +
    "				Stroke size: <span>{{selector.size}}</span>\n" +
    "			</label>\n" +
    "			<div class=\"width-100 ui-slider-dark\" slider max=\"50\" size=\"selector.size\">\n" +
    "			</div>\n" +
    "			<!-- </div> -->\n" +
    "\n" +
    "		</div>\n" +
    "		<div class=\"modal-footer\">\n" +
    "			<button class=\"btn btn-xs btn-warning\" ng-click=\"close()\">\n" +
    "				<span class=\"bigger-150\">&#10006; Close</span>\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<!-- <ul id=\"simple-colorpicker-1\" class=\"hide\">\n" +
    "	<li><span style=\"#ac725e\">#ac725e</span></li>\n" +
    "	<li><span style=\"#d06b64\">#d06b64</span></li>\n" +
    "	<li><span style=\"#f83a22\">#f83a22</span></li>\n" +
    "	<li><span style=\"#fa573c\">#fa573c</span></li>\n" +
    "	<li><span style=\"#ff7537\">#ff7537</span></li>\n" +
    "	<li><span style=\"#ffad46\">#ffad46</span></li>\n" +
    "	<li><span style=\"#42d692\">#42d692</span></li>\n" +
    "	<li><span style=\"#16a765\">#16a765</span></li>\n" +
    "	<li><span style=\"#7bd148\">#7bd148</span></li>\n" +
    "	<li><span style=\"#b3dc6c\">#b3dc6c</span></li>\n" +
    "	<li><span style=\"#fbe983\">#fbe983</span></li>\n" +
    "	<li><span style=\"#fad165\">#fad165</span></li>\n" +
    "	<li><span style=\"#92e1c0\">#92e1c0</span></li>\n" +
    "	<li><span style=\"#9fe1e7\">#9fe1e7</span></li>\n" +
    "	<li><span style=\"#9fc6e7\">#9fc6e7</span></li>\n" +
    "	<li><span style=\"#4986e7\">#4986e7</span></li>\n" +
    "	<li><span style=\"#9a9cff\">#9a9cff</span></li>\n" +
    "	<li><span style=\"#b99aff\">#b99aff</span></li>\n" +
    "	<li><span style=\"#c2c2c2\">#c2c2c2</span></li>\n" +
    "	<li><span style=\"#cabdbf\">#cabdbf</span></li>\n" +
    "	<li><span style=\"#cca6ac\">#cca6ac</span></li>\n" +
    "	<li><span style=\"#f691b2\">#f691b2</span></li>\n" +
    "	<li><span style=\"#cd74e6\">#cd74e6</span></li>\n" +
    "	<li><span style=\"#a47ae2\">#a47ae2</span></li>\n" +
    "	<li><span style=\"#555\">#555</span></li>\n" +
    "</ul> -->\n" +
    "\n" +
    "<!-- <select picker>\n" +
    "	<span value=\"ffffff\">#ffffff</span>\n" +
    "	<span value=\"ffccc9\">#ffccc9</span>\n" +
    "	<span value=\"ffce93\">#ffce93</span>\n" +
    "	<span value=\"fffc9e\">#fffc9e</span>\n" +
    "	<span value=\"ffffc7\">#ffffc7</span>\n" +
    "	<span value=\"9aff99\">#9aff99</span>\n" +
    "	<span value=\"96fffb\">#96fffb</span>\n" +
    "	<span value=\"cdffff\">#cdffff</span>\n" +
    "	<span value=\"cbcefb\">#cbcefb</span>\n" +
    "	<span value=\"cfcfcf\">#cfcfcf</span>\n" +
    "	<span value=\"fd6864\">#fd6864</span>\n" +
    "	<span value=\"fe996b\">#fe996b</span>\n" +
    "	<span value=\"fffe65\">#fffe65</span>\n" +
    "	<span value=\"fcff2f\">#fcff2f</span>\n" +
    "	<span value=\"67fd9a\">#67fd9a</span>\n" +
    "	<span value=\"38fff8\">#38fff8</span>\n" +
    "	<span value=\"68fdff\">#68fdff</span>\n" +
    "	<span value=\"9698ed\">#9698ed</span>\n" +
    "	<span value=\"c0c0c0\">#c0c0c0</span>\n" +
    "	<span value=\"fe0000\">#fe0000</span>\n" +
    "	<span value=\"f8a102\">#f8a102</span>\n" +
    "	<span value=\"ffcc67\">#ffcc67</span>\n" +
    "	<span value=\"f8ff00\">#f8ff00</span>\n" +
    "	<span value=\"34ff34\">#34ff34</span>\n" +
    "	<span value=\"68cbd0\">#68cbd0</span>\n" +
    "	<span value=\"34cdf9\">#34cdf9</span>\n" +
    "	<span value=\"6665cd\">#6665cd</span>\n" +
    "	<span value=\"9b9b9b\">#9b9b9b</span>\n" +
    "	<span value=\"cb0000\">#cb0000</span>\n" +
    "	<span value=\"f56b00\">#f56b00</span>\n" +
    "	<span value=\"ffcb2f\">#ffcb2f</span>\n" +
    "	<span value=\"ffc702\">#ffc702</span>\n" +
    "	<span value=\"32cb00\">#32cb00</span>\n" +
    "	<span value=\"00d2cb\">#00d2cb</span>\n" +
    "	<span value=\"3166ff\">#3166ff</span>\n" +
    "	<span value=\"6434fc\">#6434fc</span>\n" +
    "	<span value=\"656565\">#656565</span>\n" +
    "	<span value=\"9a0000\">#9a0000</span>\n" +
    "	<span value=\"ce6301\">#ce6301</span>\n" +
    "	<span value=\"cd9934\">#cd9934</span>\n" +
    "	<span value=\"999903\">#999903</span>\n" +
    "	<span value=\"009901\">#009901</span>\n" +
    "	<span value=\"329a9d\">#329a9d</span>\n" +
    "	<span value=\"3531ff\">#3531ff</span>\n" +
    "	<span value=\"6200c9\">#6200c9</span>\n" +
    "	<span value=\"343434\">#343434</span>\n" +
    "	<span value=\"680100\">#680100</span>\n" +
    "	<span value=\"963400\">#963400</span>\n" +
    "	<span value=\"986536\">#986536</span>\n" +
    "	<span value=\"646809\">#646809</span>\n" +
    "	<span value=\"036400\">#036400</span>\n" +
    "	<span value=\"34696d\">#34696d</span>\n" +
    "	<span value=\"00009b\">#00009b</span>\n" +
    "	<span value=\"303498\">#303498</span>\n" +
    "	<span value=\"000000\">#000000</span>\n" +
    "	<span value=\"330001\">#330001</span>\n" +
    "	<span value=\"643403\">#643403</span>\n" +
    "	<span value=\"663234\">#663234</span>\n" +
    "	<span value=\"343300\">#343300</span>\n" +
    "	<span value=\"013300\">#013300</span>\n" +
    "	<span value=\"003532\">#003532</span>\n" +
    "	<span value=\"010066\">#010066</span>\n" +
    "	<span value=\"340096\">#340096</span>\n" +
    "</select> -->\n" +
    "\n" +
    "");
}]);

angular.module("modal/template/detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modal/template/detail.tpl.html",
    "<div class=\"modal-dialog\">\n" +
    "	<div class=\"modal-content\">\n" +
    "		<div class=\"modal-body\">\n" +
    "			<div class=\"bigger-180 inline\">\n" +
    "				<img class=\"width-30  pull-left\" ng-src=\"{{room.display}}\"/>\n" +
    "				<div class=\"margin-30 pull-left\">\n" +
    "					<span class=\"bolder\">Name :</span>\n" +
    "					<span class=\"smaller-90\">{{room.name}}</span>\n" +
    "					<br>\n" +
    "					<span class=\"bolder\">Owner :</span>\n" +
    "					<span class=\"smaller-90\">{{room.owner}}</span>\n" +
    "					<br>\n" +
    "					<button class=\"inline btn btn-success icon-ok\" ng-click=\"ok()\">Join</button>\n" +
    "					<button class=\"inline btn btn-warning icon-remove\" ng-click=\"cancel()\">Cancel</button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"bigger-180\">\n" +
    "				<span class=\"bolder\">Description :</span><br/>\n" +
    "				<span class=\"margin-10 word-warp width-100\">{{room.description}}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("modal/template/display.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modal/template/display.tpl.html",
    "<div class=\"modal-dialog\">\n" +
    "	<div class=\"modal-content\">\n" +
    "		<div class=\"modal-body\">\n" +
    "			<div class=\"display-list width-100\">\n" +
    "\n" +
    "				<div class=\"list fit-height\" scroll-bar>\n" +
    "					<div class=\"card inline width-20\" ng-class=\"{'selected': selected==$index}\" ng-repeat=\"item in items\" ng-click=\"select($index)\">\n" +
    "						<img class=\"width-100\" ng-src=\"{{url+item}}\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"modal-footer\">\n" +
    "			<button class=\"btn btn-success icon-ok bigger-130\" ng-click=\"ok()\"> Ok</button>\n" +
    "			<button class=\"btn btn-warning icon-remove bigger-130\" ng-click=\"close()\"> Cancel</button>\n" +
    "		</div>	\n" +
    "	</div>\n" +
    "</div>'");
}]);

angular.module("modal/template/save.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modal/template/save.tpl.html",
    "<div class=\"modal-dialog\">\n" +
    "	<div class=\"modal-content\">\n" +
    "		<div class=\"modal-body\"> \n" +
    "			<span class=\"bigger-150\">File Name: </span><input type=\"text\" ng-model=\"input.name\"> \n" +
    "		</div>\n" +
    "		<div class=\"modal-footer\"> \n" +
    "			<button class=\"inline btn btn-success icon-ok\" ng-click=\"ok()\">Save</button> \n" +
    "			<button class=\"inline btn btn-warning icon-remove\" ng-click=\"cancel()\">Cancel</button> \n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);
