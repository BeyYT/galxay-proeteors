gdjs.loginCode = {};
gdjs.loginCode.GDNewObjectObjects1= [];
gdjs.loginCode.GDNewObjectObjects2= [];
gdjs.loginCode.GDNewObjectObjects3= [];
gdjs.loginCode.GDNewObject2Objects1= [];
gdjs.loginCode.GDNewObject2Objects2= [];
gdjs.loginCode.GDNewObject2Objects3= [];
gdjs.loginCode.GDNewObject3Objects1= [];
gdjs.loginCode.GDNewObject3Objects2= [];
gdjs.loginCode.GDNewObject3Objects3= [];
gdjs.loginCode.GDNewObject4Objects1= [];
gdjs.loginCode.GDNewObject4Objects2= [];
gdjs.loginCode.GDNewObject4Objects3= [];
gdjs.loginCode.GDNewObject5Objects1= [];
gdjs.loginCode.GDNewObject5Objects2= [];
gdjs.loginCode.GDNewObject5Objects3= [];
gdjs.loginCode.GDNewObject6Objects1= [];
gdjs.loginCode.GDNewObject6Objects2= [];
gdjs.loginCode.GDNewObject6Objects3= [];
gdjs.loginCode.GDNewObject7Objects1= [];
gdjs.loginCode.GDNewObject7Objects2= [];
gdjs.loginCode.GDNewObject7Objects3= [];
gdjs.loginCode.GDNewObject8Objects1= [];
gdjs.loginCode.GDNewObject8Objects2= [];
gdjs.loginCode.GDNewObject8Objects3= [];
gdjs.loginCode.GDNewObject9Objects1= [];
gdjs.loginCode.GDNewObject9Objects2= [];
gdjs.loginCode.GDNewObject9Objects3= [];

gdjs.loginCode.conditionTrue_0 = {val:false};
gdjs.loginCode.condition0IsTrue_0 = {val:false};
gdjs.loginCode.condition1IsTrue_0 = {val:false};
gdjs.loginCode.condition2IsTrue_0 = {val:false};


gdjs.loginCode.mapOfGDgdjs_46loginCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.loginCode.GDNewObject3Objects1});gdjs.loginCode.mapOfGDgdjs_46loginCode_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.loginCode.GDNewObject7Objects1});gdjs.loginCode.mapOfGDgdjs_46loginCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.loginCode.GDNewObject2Objects1});gdjs.loginCode.mapOfGDgdjs_46loginCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.loginCode.GDNewObject5Objects1});gdjs.loginCode.mapOfGDgdjs_46loginCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.loginCode.GDNewObject4Objects1});gdjs.loginCode.eventsList0 = function(runtimeScene) {

{


gdjs.loginCode.condition0IsTrue_0.val = false;
{
gdjs.loginCode.condition0IsTrue_0.val = !(gdjs.evtTools.firebase.auth.isAuthentified());
}if (gdjs.loginCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebase.auth.signInWithEmail(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14)), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)), gdjs.VariablesContainer.badVariable);
}}

}


};gdjs.loginCode.eventsList1 = function(runtimeScene) {

{


gdjs.loginCode.condition0IsTrue_0.val = false;
{
gdjs.loginCode.condition0IsTrue_0.val = gdjs.evtTools.firebase.auth.isAuthentified();
}if (gdjs.loginCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.loginCode.GDNewObjectObjects2);
{for(var i = 0, len = gdjs.loginCode.GDNewObjectObjects2.length ;i < len;++i) {
    gdjs.loginCode.GDNewObjectObjects2[i].setString("logged in as:" + gdjs.evtTools.firebase.auth.userManagement.getDisplayName());
}
}}

}


{


gdjs.loginCode.condition0IsTrue_0.val = false;
{
gdjs.loginCode.condition0IsTrue_0.val = !(gdjs.evtTools.firebase.auth.isAuthentified());
}if (gdjs.loginCode.condition0IsTrue_0.val) {
}

}


};gdjs.loginCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.loginCode.GDNewObject3Objects1);

gdjs.loginCode.condition0IsTrue_0.val = false;
gdjs.loginCode.condition1IsTrue_0.val = false;
{
gdjs.loginCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.loginCode.mapOfGDgdjs_46loginCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.loginCode.condition0IsTrue_0.val ) {
{
gdjs.loginCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.loginCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Create Account", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.loginCode.GDNewObject7Objects1);

gdjs.loginCode.condition0IsTrue_0.val = false;
gdjs.loginCode.condition1IsTrue_0.val = false;
{
gdjs.loginCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.loginCode.mapOfGDgdjs_46loginCode_46GDNewObject7Objects1Objects, runtimeScene, true, false);
}if ( gdjs.loginCode.condition0IsTrue_0.val ) {
{
gdjs.loginCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.loginCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.loginCode.GDNewObject2Objects1);

gdjs.loginCode.condition0IsTrue_0.val = false;
gdjs.loginCode.condition1IsTrue_0.val = false;
{
gdjs.loginCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.loginCode.mapOfGDgdjs_46loginCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.loginCode.condition0IsTrue_0.val ) {
{
gdjs.loginCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.loginCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Login Acc", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.loginCode.GDNewObject5Objects1);

gdjs.loginCode.condition0IsTrue_0.val = false;
gdjs.loginCode.condition1IsTrue_0.val = false;
{
gdjs.loginCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.loginCode.mapOfGDgdjs_46loginCode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.loginCode.condition0IsTrue_0.val ) {
{
gdjs.loginCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.loginCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.loginCode.GDNewObject6Objects1);
{firebase.auth().signOut();
}{runtimeScene.getGame().getVariables().getFromIndex(14).setString("");
}{runtimeScene.getGame().getVariables().getFromIndex(15).setString("");
}{gdjs.evtTools.storage.writeStringInJSONFile("str", "email", "");
}{gdjs.evtTools.storage.writeStringInJSONFile("str", "pass", "");
}{for(var i = 0, len = gdjs.loginCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.loginCode.GDNewObject6Objects1[i].setString("succsessfully logged out!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.loginCode.GDNewObject4Objects1);

gdjs.loginCode.condition0IsTrue_0.val = false;
gdjs.loginCode.condition1IsTrue_0.val = false;
{
gdjs.loginCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.loginCode.mapOfGDgdjs_46loginCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.loginCode.condition0IsTrue_0.val ) {
{
gdjs.loginCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.loginCode.condition1IsTrue_0.val) {
}

}


{


gdjs.loginCode.condition0IsTrue_0.val = false;
{
gdjs.loginCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.loginCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readStringFromJSONFile("str", "email", runtimeScene, runtimeScene.getVariables().get("email"));
}{gdjs.evtTools.storage.readStringFromJSONFile("str", "pass", runtimeScene, runtimeScene.getVariables().get("pass"));
}{runtimeScene.getGame().getVariables().getFromIndex(14).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("email")));
}{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("pass")));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ver");
}
{ //Subevents
gdjs.loginCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.loginCode.condition0IsTrue_0.val = false;
{
gdjs.loginCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "ver");
}if (gdjs.loginCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.loginCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.loginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loginCode.GDNewObjectObjects1.length = 0;
gdjs.loginCode.GDNewObjectObjects2.length = 0;
gdjs.loginCode.GDNewObjectObjects3.length = 0;
gdjs.loginCode.GDNewObject2Objects1.length = 0;
gdjs.loginCode.GDNewObject2Objects2.length = 0;
gdjs.loginCode.GDNewObject2Objects3.length = 0;
gdjs.loginCode.GDNewObject3Objects1.length = 0;
gdjs.loginCode.GDNewObject3Objects2.length = 0;
gdjs.loginCode.GDNewObject3Objects3.length = 0;
gdjs.loginCode.GDNewObject4Objects1.length = 0;
gdjs.loginCode.GDNewObject4Objects2.length = 0;
gdjs.loginCode.GDNewObject4Objects3.length = 0;
gdjs.loginCode.GDNewObject5Objects1.length = 0;
gdjs.loginCode.GDNewObject5Objects2.length = 0;
gdjs.loginCode.GDNewObject5Objects3.length = 0;
gdjs.loginCode.GDNewObject6Objects1.length = 0;
gdjs.loginCode.GDNewObject6Objects2.length = 0;
gdjs.loginCode.GDNewObject6Objects3.length = 0;
gdjs.loginCode.GDNewObject7Objects1.length = 0;
gdjs.loginCode.GDNewObject7Objects2.length = 0;
gdjs.loginCode.GDNewObject7Objects3.length = 0;
gdjs.loginCode.GDNewObject8Objects1.length = 0;
gdjs.loginCode.GDNewObject8Objects2.length = 0;
gdjs.loginCode.GDNewObject8Objects3.length = 0;
gdjs.loginCode.GDNewObject9Objects1.length = 0;
gdjs.loginCode.GDNewObject9Objects2.length = 0;
gdjs.loginCode.GDNewObject9Objects3.length = 0;

gdjs.loginCode.eventsList2(runtimeScene);
return;

}

gdjs['loginCode'] = gdjs.loginCode;
