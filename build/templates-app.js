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
    "		<!-- <a ui-sref=\"main.home\">Home</a>\n" +
    "		<a ui-sref=\"main.drive\">Drive</a>\n" +
    "		<a ui-sref=\"main.draw\">Draw</a>\n" +
    "		<a ui-sref=\"main.slide\">Slide</a>\n" +
    "		<a ui-sref=\"main.quiz\">Quiz</a> -->\n" +
    "		<ul class=\"nav ace-nav\">\n" +
    "			<li class=\"nav-tab light-orange\"><a ui-sref=\"main.home\">Home</a></li>\n" +
    "			<li class=\"nav-tab light-purple\"><a ui-sref=\"main.drive\">Drive</a></li>\n" +
    "			<li class=\"nav-tab light-pink\"><a ui-sref=\"main.draw\">Draw</a></li>\n" +
    "			<li class=\"nav-tab dark-opaque\"><a ui-sref=\"main.slide\">Slide</a></li>\n" +
    "			<li class=\"nav-tab white-opaque\"><a ui-sref=\"main.quiz\">Quiz</a></li>\n" +
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
    "\n" +
    "	<div class=\"color\" colorpicker=\"rgba\" colorpicker-position=\"top\" ng-model=\"attr\"></div>\n" +
    "	<!-- <div class=\"slider\"></div> -->\n" +
    "		<!-- <select id=\"color\">\n" +
    "			<option value=\"ffffff\">#ffffff</option>\n" +
    "			<option value=\"ffccc9\">#ffccc9</option>\n" +
    "			<option value=\"ffce93\">#ffce93</option>\n" +
    "			<option value=\"fffc9e\">#fffc9e</option>\n" +
    "			<option value=\"ffffc7\">#ffffc7</option>\n" +
    "			<option value=\"9aff99\">#9aff99</option>\n" +
    "			<option value=\"96fffb\">#96fffb</option>\n" +
    "			<option value=\"cdffff\">#cdffff</option>\n" +
    "			<option value=\"cbcefb\">#cbcefb</option>\n" +
    "			<option value=\"cfcfcf\">#cfcfcf</option>\n" +
    "			<option value=\"fd6864\">#fd6864</option>\n" +
    "			<option value=\"fe996b\">#fe996b</option>\n" +
    "			<option value=\"fffe65\">#fffe65</option>\n" +
    "			<option value=\"fcff2f\">#fcff2f</option>\n" +
    "			<option value=\"67fd9a\">#67fd9a</option>\n" +
    "			<option value=\"38fff8\">#38fff8</option>\n" +
    "			<option value=\"68fdff\">#68fdff</option>\n" +
    "			<option value=\"9698ed\">#9698ed</option>\n" +
    "			<option value=\"c0c0c0\">#c0c0c0</option>\n" +
    "			<option value=\"fe0000\">#fe0000</option>\n" +
    "			<option value=\"f8a102\">#f8a102</option>\n" +
    "			<option value=\"ffcc67\">#ffcc67</option>\n" +
    "			<option value=\"f8ff00\">#f8ff00</option>\n" +
    "			<option value=\"34ff34\">#34ff34</option>\n" +
    "			<option value=\"68cbd0\">#68cbd0</option>\n" +
    "			<option value=\"34cdf9\">#34cdf9</option>\n" +
    "			<option value=\"6665cd\">#6665cd</option>\n" +
    "			<option value=\"9b9b9b\">#9b9b9b</option>\n" +
    "			<option value=\"cb0000\">#cb0000</option>\n" +
    "			<option value=\"f56b00\">#f56b00</option>\n" +
    "			<option value=\"ffcb2f\">#ffcb2f</option>\n" +
    "			<option value=\"ffc702\">#ffc702</option>\n" +
    "			<option value=\"32cb00\">#32cb00</option>\n" +
    "			<option value=\"00d2cb\">#00d2cb</option>\n" +
    "			<option value=\"3166ff\">#3166ff</option>\n" +
    "			<option value=\"6434fc\">#6434fc</option>\n" +
    "			<option value=\"656565\">#656565</option>\n" +
    "			<option value=\"9a0000\">#9a0000</option>\n" +
    "			<option value=\"ce6301\">#ce6301</option>\n" +
    "			<option value=\"cd9934\">#cd9934</option>\n" +
    "			<option value=\"999903\">#999903</option>\n" +
    "			<option value=\"009901\">#009901</option>\n" +
    "			<option value=\"329a9d\">#329a9d</option>\n" +
    "			<option value=\"3531ff\">#3531ff</option>\n" +
    "			<option value=\"6200c9\">#6200c9</option>\n" +
    "			<option value=\"343434\">#343434</option>\n" +
    "			<option value=\"680100\">#680100</option>\n" +
    "			<option value=\"963400\">#963400</option>\n" +
    "			<option value=\"986536\" selected=\"selected\">#986536</option>\n" +
    "			<option value=\"646809\">#646809</option>\n" +
    "			<option value=\"036400\">#036400</option>\n" +
    "			<option value=\"34696d\">#34696d</option>\n" +
    "			<option value=\"00009b\">#00009b</option>\n" +
    "			<option value=\"303498\">#303498</option>\n" +
    "			<option value=\"000000\">#000000</option>\n" +
    "			<option value=\"330001\">#330001</option>\n" +
    "			<option value=\"643403\">#643403</option>\n" +
    "			<option value=\"663234\">#663234</option>\n" +
    "			<option value=\"343300\">#343300</option>\n" +
    "			<option value=\"013300\">#013300</option>\n" +
    "			<option value=\"003532\">#003532</option>\n" +
    "			<option value=\"010066\">#010066</option>\n" +
    "			<option value=\"340096\">#340096</option>\n" +
    "		</select>\n" +
    "	 -->\n" +
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
    "			<tool-bar class=\"toolbar\" tool=\"tool\" is-hide=\"{{hideTool&&!isDesktop}}\"></tool-bar>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-if=\"isDesktop\" class=\"well col-md-3 col-lg-3\">\n" +
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
    "	<div class=\"widget-header\">\n" +
    "		<div class=\"inline\" ng-init=\"tab = 'slide'\">\n" +
    "			<button class=\"btn btn-app btn-xs no-radius\" ng-click=\"tab = 'slide'\">Slide</a></li>\n" +
    "			<button class=\"btn btn-app btn-xs no-radius\" ng-click=\"tab = 'quiz'\">Quiz</a></li>\n" +
    "		</div>\n" +
    "		<div class=\"widget-toolbar\">\n" +
    "			<button class=\"btn btn-xs bigger\" ng-click=\"saveSlide()\">Save Slide</button>\n" +
    "			<button class=\"btn btn-xs bigger\" ng-click=\"saveDraw()\">Save Draw</button>\n" +
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
    "					{{data.title}}\n" +
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
    "<div class=\"container\">\n" +
    "	<!-- <select ng-model=\"room\" ng-options=\"room for room in rooms\"></select> -->\n" +
    "	<button class=\"btn btn-app\" ng-click=\"list()\">List</button>		\n" +
    "	<button class=\"btn btn-app\" ng-click=\"connect()\">Connect</button>		\n" +
    "	<button class=\"btn btn-app\" ng-click=\"disconnect()\">Disconnect</button>\n" +
    "	<div class=\"room-list\">\n" +
    "		<div class=\"infobox infobox-dark\" ng-repeat=\"room in rooms\" ng-class=\"{'infobox-blue3': selected==$index,'infobox-blue': selected!=$index}\" ng-click=\"showDetail($index)\">\n" +
    "			<div class=\"infobox-data\">\n" +
    "				<img class=\"fit-height\" ng-src=\"{{room.display}}\"/>\n" +
    "				<span>{{room.name}}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("menu_left/template/home_teacher.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/home_teacher.tpl.html",
    "<div>\n" +
    "	<div class=\"pull-left\">\n" +
    "		<label>Name</label>\n" +
    "		<input type=\"text\" ng-model=\"room\">\n" +
    "		<div>\n" +
    "			<label>Description</label><br/>\n" +
    "			<textarea style=\"width:200;height:200;\" class=\"block\" placeholder=\"Input detail\" ng-model=\"description\"></textarea>	\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"pull-right\">\n" +
    "		<img class=\"display\" ng-src=\"{{display}}\" ng-click=\"selectDisplay()\"/>\n" +
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
    "	<div class=\"widget-header header-color-dark\">\n" +
    "		<h5 class=\"bigger-180 lighter\">{{index}}. {{question}}</h5>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"widget-body\" ng-hide=\"isEnd\">\n" +
    "		<!-- <div class=\"widget-main padding-10 answer\"> -->\n" +
    "		<div class=\"control-group\">\n" +
    "			<div class=\"radio\" ng-repeat=\"ans in answer\">\n" +
    "				<label>\n" +
    "					<input class=\"ace\" type=\"radio\" name=\"form-field-radio\" ng-click=\"select($index)\" ng-checked=\"$index==0\"/>\n" +
    "					<span class=\"lbl\">{{ans}}</span>\n" +
    "				</label>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- </div> -->\n" +
    "		<div class=\"widget-toolbox clearfix\">\n" +
    "			<button class=\"btn pull-right\" ng-click=\"next()\">Next</button>\n" +
    "		</div>\n" +
    "	</div>    \n" +
    "\n" +
    "	<div class=\"widget-body\" ng-show=\"isEnd\">\n" +
    "		Finish!!!!\n" +
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
    "			<div class=\"mirror\" fit-size>\n" +
    "				<canvas id=\"mirror-1\" draw-pad text=\"{{text}}\" send=\"isSend\">\n" +
    "				</canvas>\n" +
    "				<input 	id=\"textbox\" ng-model=\"text\">\n" +
    "				<tool-bar class=\"toolbar\" tool=\"tool\" is-hide=\"{{hideTool&&!isDesktop}}\"></tool-bar>\n" +
    "			</div>\n" +
    "			<div class=\"slide-pad\" fit-size>\n" +
    "				<slide-pad send=\"isSend\"></slide-pad>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-if=\"isDesktop\" class=\"col-md-3 col-lg-3 fit-height\">\n" +
    "			<chat class=\"well\"></chat>\n" +
    "		</div>\n" +
    "		<div ng-if=\"!isDesktop\" ng-hide=\"hideMenu\" class=\"nav-right\">\n" +
    "			<chat></chat>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	\n" +
    "</div>");
}]);

angular.module("menu_left/template/tool_bar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_left/template/tool_bar.tpl.html",
    "<div class=\"widget-box\" ng-hide=\"isHide\">	\n" +
    "	<div class=\"widget-body\">\n" +
    "		<!-- <div class=\"widget-main\"> -->\n" +
    "\n" +
    "			<div class=\"width-35 pull-left\">\n" +
    "				<button ng-repeat=\"tool in toolLeft\" ng-click=\"changeToolLeft($index)\">{{tool}}</button>\n" +
    "			</div>\n" +
    "\n" +
    "			<selector class=\"width-30 pull-left attr\"></selector>		\n" +
    "\n" +
    "			<div class=\"width-35 pull-left\">\n" +
    "				<button ng-repeat=\"tool in toolRight\" ng-click=\"changeToolRight($index)\">{{tool}}</button>\n" +
    "			</div>\n" +
    "\n" +
    "		<!-- </div> -->\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("menu_right/template/chat.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_right/template/chat.tpl.html",
    "<div>\n" +
    "	<div class=\"chat-box list\" scroll-bar>\n" +
    "		<div ng-repeat=\"msg in msgs track by $index\">\n" +
    "			<img ng-src=\"{{msg}}\" class=\"emotion\">\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"emoticon-box\" scroll-bar>\n" +
    "		<img class=\"fit-height\" ng-repeat=\"emo in emotions\" ng-src=\"{{url+emo}}\" ng-click=\"select($index)\">\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("menu_right/template/group.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu_right/template/group.tpl.html",
    "<div class=\"well fit-height list\" scroll-bar>\n" +
    "	<div ng-repeat=\"group in groups\">\n" +
    "		\n" +
    "		<div class=\"well\">\n" +
    "			<img class=\"thumbnail\" ng-src=\"{{group.image}}\" ng-click=\"toggle($index)\"/>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>");
}]);
