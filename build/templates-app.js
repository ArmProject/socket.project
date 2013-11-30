angular.module('templates-app', ['main/template/login.tpl.html', 'main/template/main.tpl.html', 'main/template/menu_left.tpl.html', 'menu_left/template/attribute.tpl.html', 'menu_left/template/detail.tpl.html', 'menu_left/template/display.tpl.html', 'menu_left/template/draw_pad.tpl.html', 'menu_left/template/drive.tpl.html', 'menu_left/template/drive_quiz.tpl.html', 'menu_left/template/drive_slide.tpl.html', 'menu_left/template/home_student.tpl.html', 'menu_left/template/home_teacher.tpl.html', 'menu_left/template/quiz_student.tpl.html', 'menu_left/template/quiz_teacher.tpl.html', 'menu_left/template/slide_pad.tpl.html', 'menu_left/template/tool_bar.tpl.html', 'menu_right/template/chat.tpl.html', 'menu_right/template/group.tpl.html']);

angular.module("main/template/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main/template/login.tpl.html",
    "<div class=\"modal-dialog\">\n" +
    "	<div class=\"modal-content\">\n" +
    "\n" +
    "		<div class=\"modal-header\">\n" +
    "			Login\n" +
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
    "<div ng-controller=\"MainCtrl\">\n" +
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
    "<div class=\"navbar-container\">\n" +
    "	<div class=\"navbar-header pull-left\">\n" +
    "		<ul class=\"nav ace-nav\">\n" +
    "			<li class=\"nav-tab light-orange\"><a ui-sref=\"main.home\">Home</a></li>\n" +
    "			<li class=\"nav-tab light-purple\"><a ui-sref=\"main.drive\">Drive</a></li>\n" +
    "			<li class=\"nav-tab purple\"><a ui-sref=\"main.draw\">Draw</a></li>\n" +
    "			<li class=\"nav-tab dark-opaque\"><a ui-sref=\"main.slide\">Slide</a></li>\n" +
    "			<li class=\"nav-tab grey\"><a ui-sref=\"main.quiz\">Quiz</a></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "	<div class=\"navbar-header pull-right\">\n" +
    "		<span>{{roomName}}</span>\n" +
    "		<span>{{userName}}</span>\n" +
    "		<button class=\"inline\" ng-click=\"logout()\">logout</button>\n" +
    "		<iframe id=\"logout\" ng-src=\"{{url}}\" style=\"display:none;\"></iframe>\n" +
    "	</div>\n" +
    "</div>");
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
    "			<img class=\"width-20\" ng-src=\"{{room.display}}\"/>\n" +
    "			<div class=\"inline\">\n" +
    "				<span>Name :</span>\n" +
    "				<span>{{room.name}}</span>\n" +
    "				<div>\n" +
    "					<button class=\"inline btn\" ng-click=\"ok()\">Ok</button>\n" +
    "					<button class=\"inline btn\" ng-click=\"cancel()\">Cancel</button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div>\n" +
    "				<span>Description :</span><br/>\n" +
    "				<span>{{room.description}}</span>\n" +
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
    "			<button ng-click=\"ok()\">Ok</button>\n" +
    "			<button ng-click=\"cancel()\">Cancel</button>\n" +
    "		</div>	\n" +
    "	</div>\n" +
    "</div>'");
}]);

angular.module("menu_left/template/draw_pad.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/draw_pad.tpl.html",
    "<div ng-swipe-up=\"checkToolSwipe(false)\" ng-swipe-down=\"checkToolSwipe(true)\" ng-swipe-left=\"checkMenuSwipe(false)\" ng-swipe-right=\"checkMenuSwipe(true)\">\n" +
    "	<div style=\"display:none;\">\n" +
    "		<canvas id=\"data\"/>\n" +
    "	</div>\n" +
    "	<div is-visible=\"isDesktop\" class=\"visible-md visible-lg\"></div>\n" +
    "	<div class=\"row\">\n" +
    "\n" +
    "		<div class=\"pad col-md-9 col-lg-9\">\n" +
    "			<canvas id=\"draw\" draw-pad text=\"{{text}}\" send=\"true\" fit-size></canvas>\n" +
    "			<input id=\"textbox\" ng-model=\"text\">\n" +
    "			<tool-bar class=\"toolbar fluid-container\" tool=\"tool\" is-hide=\"{{hideTool&&!isDesktop}}\"></tool-bar>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-if=\"isDesktop\" class=\"col-md-3 col-lg-3\">\n" +
    "			<group></group>\n" +
    "		</div>\n" +
    "		<div ng-if=\"!isDesktop\" ng-hide=\"hideMenu\" class=\"nav-right\">\n" +
    "			<group></group>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	\n" +
    "</div>");
}]);

angular.module("menu_left/template/drive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/drive.tpl.html",
    "<div class=\"widget-box\">\n" +
    "	<div class=\"widget-header header-color-grey\">\n" +
    "		<div class=\"inline\" ng-init=\"tab = 'slide'\">\n" +
    "			<button class=\"btn btn-app btn-xs no-radius btn-light\" ng-click=\"tab = 'slide'\">\n" +
    "				Slide\n" +
    "			</button>\n" +
    "			<button class=\"btn btn-app btn-xs no-radius btn-light\" ng-click=\"tab = 'quiz'\" ng-show=\"hasQuiz\">\n" +
    "				Quiz\n" +
    "			</button>\n" +
    "		</div>\n" +
    "		<div class=\"widget-toolbar\">\n" +
    "			<button class=\"btn btn-xs bigger\" ng-click=\"saveSlide()\">\n" +
    "				<i class=\"icon-save bigger-180\"></i>\n" +
    "				<span class=\"bigger-140\"> Slide</span>\n" +
    "			</button>\n" +
    "			<button class=\"btn btn-xs bigger\" ng-click=\"saveDraw()\">\n" +
    "				<i class=\"icon-save bigger-180\"></i>\n" +
    "				<span class=\"bigger-140\"> Draw</span>\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"widget-body\" ng-switch on=\"tab\">\n" +
    "		<drive-slide ng-switch-when=\"slide\"></drive-slide>\n" +
    "		<drive-quiz ng-switch-when=\"quiz\"></drive-quiz>\n" +
    "	</div>\n" +
    "</div> ");
}]);

angular.module("menu_left/template/drive_quiz.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/drive_quiz.tpl.html",
    "<div class=\"container fit-height list\" scroll-bar> \n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"well col-lg-8 fit-height\" ng-repeat=\"data in datas\" ng-click=\"select($index)\">\n" +
    "			{{data}}\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("menu_left/template/drive_slide.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/drive_slide.tpl.html",
    "	<!-- <div class=\"widget-body\"> -->\n" +
    "\n" +
    "		<div style=\"display:none;\">\n" +
    "			<canvas id=\"data\"/>\n" +
    "		</div>		\n" +
    "		<div class=\"list fit-height\" scroll-bar>\n" +
    "			<!-- <div class=\"tab-pane active\"> -->\n" +
    "			<ul class=\"item-list\">\n" +
    "				<li class=\"item-grey clearfix\" ng-class=\"{selected: selected==$index}\" ng-repeat=\"data in datas\" ng-click=\"select($index)\">\n" +
    "					<img ng-src=\"{{data.iconLink}}\">\n" +
    "					<span> {{data.title}}</span>\n" +
    "					<span class=\"pull-right\">{{toDate(data.createdDate)}}</span>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "			<!-- </div> -->\n" +
    "		</div>\n" +
    "\n" +
    "	<!-- </div> -->\n" +
    "");
}]);

angular.module("menu_left/template/home_student.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/home_student.tpl.html",
    "<div class=\"widget-box\">\n" +
    "\n" +
    "	<div class=\"widget-header header-color-blue\">\n" +
    "		<h5 class=\"bigger-160\">Rooms</h5>\n" +
    "\n" +
    "		<div class=\"widget-toolbar width-10 align-center\">\n" +
    "			<!-- <button class=\"btn btn-app\" ng-click=\"list()\">List</button>	 -->\n" +
    "			<a href=\"#main/home/student\" data-action=\"reload\">\n" +
    "				<i class=\"icon-refresh bigger-210\" ng-click=\"list()\"></i>\n" +
    "			</a>\n" +
    "		</div>\n" +
    "		<!-- <button class=\"btn btn-app\" ng-click=\"connect()\">Connect</button>		\n" +
    "		<button class=\"btn btn-app\" ng-click=\"disconnect()\">Disconnect</button> -->\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"widget-body fit-height\">\n" +
    "		<div class=\"room-list\">\n" +
    "			<div class=\"infobox infobox-dark\" ng-repeat=\"room in rooms\" ng-class=\"{'infobox-blue3': selected==$index,'infobox-blue': selected!=$index}\" ng-click=\"showDetail($index)\">\n" +
    "				<div class=\"infobox-data\">\n" +
    "					<img class=\"fit-height\" ng-src=\"{{room.display}}\"/>\n" +
    "					<span>{{room.name}}</span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("menu_left/template/home_teacher.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/home_teacher.tpl.html",
    "<div>\n" +
    "	<div class=\"pull-left\">\n" +
    "		<label>Name</label>\n" +
    "		<input type=\"text\" ng-model=\"room.name\">\n" +
    "		<div>\n" +
    "			<label>Description</label><br/>\n" +
    "			<textarea style=\"width:200;height:200;\" class=\"block\" placeholder=\"Input detail\" ng-model=\"room.description\"></textarea>	\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"pull-right\">\n" +
    "		<img class=\"display\" ng-src=\"{{room.display}}\" ng-click=\"selectDisplay()\"/>\n" +
    "		<div>\n" +
    "			<button ng-click=\"create()\">Create Room</button>\n" +
    "			<button ng-click=\"close()\">Close Room</button>\n" +
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
    "<div>\n" +
    "	<button style=\"display:inline;\" ng-repeat=\"q in quiz\" ng-click=\"changeIndex($index)\">{{$index}}</button>\n" +
    "	<highchart class=\"fit-height\" config=\"chartConfig\" ></highchart>\n" +
    "</div>");
}]);

angular.module("menu_left/template/slide_pad.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/slide_pad.tpl.html",
    "<div ng-swipe-up=\"checkToolSwipe(false)\" ng-swipe-down=\"checkToolSwipe(true)\" ng-swipe-left=\"checkMenuSwipe(false)\" ng-swipe-right=\"checkMenuSwipe(true)\">\n" +
    "\n" +
    "	<div is-visible=\"isDesktop\" class=\"visible-md visible-lg\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"pad col-md-9 col-lg-9\">\n" +
    "			<div class=\"control-area\" ng-show=\"isShow\" ng-click=\"prevIndex(false)\"></div>\n" +
    "			<div class=\"control-area\" ng-show=\"isShow\" ng-click=\"nextIndex(false)\"></div>\n" +
    "			<div class=\"mirror\">\n" +
    "				<canvas id=\"mirror-1\" draw-pad text=\"{{text}}\" send=\"isSend\">\n" +
    "				</canvas>\n" +
    "				<input 	id=\"textbox\" ng-model=\"text\">\n" +
    "				<tool-bar class=\"toolbar fluid-container\" tool=\"tool\" is-hide=\"{{hideTool&&!isDesktop}}\"></tool-bar>\n" +
    "			</div>\n" +
    "			<div class=\"slide-pad\" fit-size>\n" +
    "				<slide-pad send=\"isSend\"></slide-pad>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-if=\"isDesktop\" class=\"col-md-3 col-lg-3 fit-height well\">\n" +
    "			<chat></chat>\n" +
    "		</div>\n" +
    "		<div ng-if=\"!isDesktop\" ng-hide=\"hideMenu\" class=\"well nav-right\">\n" +
    "			<chat></chat>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	\n" +
    "</div>");
}]);

angular.module("menu_left/template/tool_bar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/tool_bar.tpl.html",
    "<div ng-hide=\"isHide\">	\n" +
    "	<!-- <div class=\"widget-body\"> -->\n" +
    "		<!-- <div class=\"widget-main\"> -->\n" +
    "\n" +
    "			<div class=\"width-40 pull-left\">\n" +
    "				<button ng-repeat=\"tool in toolLeft\" ng-click=\"changeToolLeft($index)\">{{tool}}</button>\n" +
    "			</div>\n" +
    "\n" +
    "			<selector class=\"width-20 pull-left attr\"></selector>		\n" +
    "\n" +
    "			<div class=\"width-40 pull-left\">\n" +
    "				<button ng-repeat=\"tool in toolRight\" ng-click=\"changeToolRight($index)\">{{tool}}</button>\n" +
    "			</div>\n" +
    "\n" +
    "		<!-- </div> -->\n" +
    "	<!-- </div> -->\n" +
    "</div>");
}]);

angular.module("menu_right/template/chat.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_right/template/chat.tpl.html",
    "	<div class=\"chat-box list\" scroll-bar>\n" +
    "		<div ng-repeat=\"msg in msgs track by $index\">\n" +
    "			<img ng-src=\"{{msg}}\" class=\"emotion\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"emoticon-box\" scroll-bar>\n" +
    "		<img class=\"fit-height\" ng-repeat=\"emo in emotions\" ng-src=\"{{url+emo}}\" ng-click=\"select($index)\">\n" +
    "	</div>\n" +
    "");
}]);

angular.module("menu_right/template/group.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_right/template/group.tpl.html",
    "<div class=\"well\">\n" +
    "	<div class=\"list fit-height\" scroll-bar>		\n" +
    "		<div ng-repeat=\"group in groups\">\n" +
    "			<img class=\"thumbnail\" ng-src=\"{{group.image}}\" ng-click=\"toggle($index)\"/>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);
