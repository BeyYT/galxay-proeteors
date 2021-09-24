gdjs.Create_32AccountCode = {};
gdjs.Create_32AccountCode.GDNewObjectObjects1= [];
gdjs.Create_32AccountCode.GDNewObjectObjects2= [];
gdjs.Create_32AccountCode.GDNewObjectObjects3= [];
gdjs.Create_32AccountCode.GDNewObject2Objects1= [];
gdjs.Create_32AccountCode.GDNewObject2Objects2= [];
gdjs.Create_32AccountCode.GDNewObject2Objects3= [];
gdjs.Create_32AccountCode.GDNewObject3Objects1= [];
gdjs.Create_32AccountCode.GDNewObject3Objects2= [];
gdjs.Create_32AccountCode.GDNewObject3Objects3= [];
gdjs.Create_32AccountCode.GDNewObject4Objects1= [];
gdjs.Create_32AccountCode.GDNewObject4Objects2= [];
gdjs.Create_32AccountCode.GDNewObject4Objects3= [];
gdjs.Create_32AccountCode.GDNewObject5Objects1= [];
gdjs.Create_32AccountCode.GDNewObject5Objects2= [];
gdjs.Create_32AccountCode.GDNewObject5Objects3= [];
gdjs.Create_32AccountCode.GDEmailObjects1= [];
gdjs.Create_32AccountCode.GDEmailObjects2= [];
gdjs.Create_32AccountCode.GDEmailObjects3= [];
gdjs.Create_32AccountCode.GDPasswordObjects1= [];
gdjs.Create_32AccountCode.GDPasswordObjects2= [];
gdjs.Create_32AccountCode.GDPasswordObjects3= [];
gdjs.Create_32AccountCode.GDNewObject6Objects1= [];
gdjs.Create_32AccountCode.GDNewObject6Objects2= [];
gdjs.Create_32AccountCode.GDNewObject6Objects3= [];
gdjs.Create_32AccountCode.GDETXTENTRYObjects1= [];
gdjs.Create_32AccountCode.GDETXTENTRYObjects2= [];
gdjs.Create_32AccountCode.GDETXTENTRYObjects3= [];
gdjs.Create_32AccountCode.GDPASSTXTENTObjects1= [];
gdjs.Create_32AccountCode.GDPASSTXTENTObjects2= [];
gdjs.Create_32AccountCode.GDPASSTXTENTObjects3= [];
gdjs.Create_32AccountCode.GDNewObject7Objects1= [];
gdjs.Create_32AccountCode.GDNewObject7Objects2= [];
gdjs.Create_32AccountCode.GDNewObject7Objects3= [];
gdjs.Create_32AccountCode.GDNewObject8Objects1= [];
gdjs.Create_32AccountCode.GDNewObject8Objects2= [];
gdjs.Create_32AccountCode.GDNewObject8Objects3= [];

gdjs.Create_32AccountCode.conditionTrue_0 = {val:false};
gdjs.Create_32AccountCode.condition0IsTrue_0 = {val:false};
gdjs.Create_32AccountCode.condition1IsTrue_0 = {val:false};
gdjs.Create_32AccountCode.condition2IsTrue_0 = {val:false};
gdjs.Create_32AccountCode.conditionTrue_1 = {val:false};
gdjs.Create_32AccountCode.condition0IsTrue_1 = {val:false};
gdjs.Create_32AccountCode.condition1IsTrue_1 = {val:false};
gdjs.Create_32AccountCode.condition2IsTrue_1 = {val:false};


gdjs.Create_32AccountCode.eventsList0 = function(runtimeScene) {

{


gdjs.Create_32AccountCode.condition0IsTrue_0.val = false;
{
{gdjs.Create_32AccountCode.conditionTrue_1 = gdjs.Create_32AccountCode.condition0IsTrue_0;
gdjs.Create_32AccountCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15321508);
}
}if (gdjs.Create_32AccountCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ETXTENTRY"), gdjs.Create_32AccountCode.GDETXTENTRYObjects1);
gdjs.copyArray(runtimeScene.getObjects("PASSTXTENT"), gdjs.Create_32AccountCode.GDPASSTXTENTObjects1);
{for(var i = 0, len = gdjs.Create_32AccountCode.GDETXTENTRYObjects1.length ;i < len;++i) {
    gdjs.Create_32AccountCode.GDETXTENTRYObjects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.Create_32AccountCode.GDPASSTXTENTObjects1.length ;i < len;++i) {
    gdjs.Create_32AccountCode.GDPASSTXTENTObjects1[i].activate(false);
}
}}

}


};gdjs.Create_32AccountCode.mapOfGDgdjs_46Create_9532AccountCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.Create_32AccountCode.GDNewObject6Objects1});gdjs.Create_32AccountCode.eventsList1 = function(runtimeScene) {

{


gdjs.Create_32AccountCode.condition0IsTrue_0.val = false;
{
{gdjs.Create_32AccountCode.conditionTrue_1 = gdjs.Create_32AccountCode.condition0IsTrue_0;
gdjs.Create_32AccountCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15326844);
}
}if (gdjs.Create_32AccountCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "menu");
}}

}


{


gdjs.Create_32AccountCode.condition0IsTrue_0.val = false;
{
gdjs.Create_32AccountCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "menu");
}if (gdjs.Create_32AccountCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "login", false);
}}

}


};gdjs.Create_32AccountCode.mapOfGDgdjs_46Create_9532AccountCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.Create_32AccountCode.GDNewObject4Objects1});gdjs.Create_32AccountCode.mapOfGDgdjs_46Create_9532AccountCode_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.Create_32AccountCode.GDNewObject7Objects1});gdjs.Create_32AccountCode.eventsList2 = function(runtimeScene) {

{


gdjs.Create_32AccountCode.condition0IsTrue_0.val = false;
{
{gdjs.Create_32AccountCode.conditionTrue_1 = gdjs.Create_32AccountCode.condition0IsTrue_0;
gdjs.Create_32AccountCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15328788);
}
}if (gdjs.Create_32AccountCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ETXTENTRY"), gdjs.Create_32AccountCode.GDETXTENTRYObjects1);
/* Reuse gdjs.Create_32AccountCode.GDNewObject4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.Create_32AccountCode.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("PASSTXTENT"), gdjs.Create_32AccountCode.GDPASSTXTENTObjects1);
{for(var i = 0, len = gdjs.Create_32AccountCode.GDETXTENTRYObjects1.length ;i < len;++i) {
    gdjs.Create_32AccountCode.GDETXTENTRYObjects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.Create_32AccountCode.GDPASSTXTENTObjects1.length ;i < len;++i) {
    gdjs.Create_32AccountCode.GDPASSTXTENTObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.Create_32AccountCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.Create_32AccountCode.GDNewObject7Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Create_32AccountCode.mapOfGDgdjs_46Create_9532AccountCode_46GDNewObject7Objects1Objects, (( gdjs.Create_32AccountCode.GDNewObject4Objects1.length === 0 ) ? 0 :gdjs.Create_32AccountCode.GDNewObject4Objects1[0].getX()) - 45, (( gdjs.Create_32AccountCode.GDNewObject4Objects1.length === 0 ) ? 0 :gdjs.Create_32AccountCode.GDNewObject4Objects1[0].getY()) - 15, "");
}}

}


};gdjs.Create_32AccountCode.mapOfGDgdjs_46Create_9532AccountCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.Create_32AccountCode.GDNewObject5Objects1});gdjs.Create_32AccountCode.mapOfGDgdjs_46Create_9532AccountCode_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.Create_32AccountCode.GDNewObject7Objects1});gdjs.Create_32AccountCode.eventsList3 = function(runtimeScene) {

{


gdjs.Create_32AccountCode.condition0IsTrue_0.val = false;
{
{gdjs.Create_32AccountCode.conditionTrue_1 = gdjs.Create_32AccountCode.condition0IsTrue_0;
gdjs.Create_32AccountCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15330852);
}
}if (gdjs.Create_32AccountCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ETXTENTRY"), gdjs.Create_32AccountCode.GDETXTENTRYObjects1);
/* Reuse gdjs.Create_32AccountCode.GDNewObject5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.Create_32AccountCode.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("PASSTXTENT"), gdjs.Create_32AccountCode.GDPASSTXTENTObjects1);
{for(var i = 0, len = gdjs.Create_32AccountCode.GDETXTENTRYObjects1.length ;i < len;++i) {
    gdjs.Create_32AccountCode.GDETXTENTRYObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.Create_32AccountCode.GDPASSTXTENTObjects1.length ;i < len;++i) {
    gdjs.Create_32AccountCode.GDPASSTXTENTObjects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.Create_32AccountCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.Create_32AccountCode.GDNewObject7Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Create_32AccountCode.mapOfGDgdjs_46Create_9532AccountCode_46GDNewObject7Objects1Objects, (( gdjs.Create_32AccountCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.Create_32AccountCode.GDNewObject5Objects1[0].getX()) - 45, (( gdjs.Create_32AccountCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.Create_32AccountCode.GDNewObject5Objects1[0].getY()) - 15, "");
}}

}


};gdjs.Create_32AccountCode.eventsList4 = function(runtimeScene) {

{


gdjs.Create_32AccountCode.condition0IsTrue_0.val = false;
{
gdjs.Create_32AccountCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Create_32AccountCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Create_32AccountCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ETXTENTRY"), gdjs.Create_32AccountCode.GDETXTENTRYObjects1);
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.Create_32AccountCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("PASSTXTENT"), gdjs.Create_32AccountCode.GDPASSTXTENTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.Create_32AccountCode.GDPasswordObjects1);
{for(var i = 0, len = gdjs.Create_32AccountCode.GDEmailObjects1.length ;i < len;++i) {
    gdjs.Create_32AccountCode.GDEmailObjects1[i].setString((( gdjs.Create_32AccountCode.GDETXTENTRYObjects1.length === 0 ) ? "" :gdjs.Create_32AccountCode.GDETXTENTRYObjects1[0].getString()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(14).setString((( gdjs.Create_32AccountCode.GDETXTENTRYObjects1.length === 0 ) ? "" :gdjs.Create_32AccountCode.GDETXTENTRYObjects1[0].getString()));
}{for(var i = 0, len = gdjs.Create_32AccountCode.GDPasswordObjects1.length ;i < len;++i) {
    gdjs.Create_32AccountCode.GDPasswordObjects1[i].setString((( gdjs.Create_32AccountCode.GDPASSTXTENTObjects1.length === 0 ) ? "" :gdjs.Create_32AccountCode.GDPASSTXTENTObjects1[0].getString()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setString((( gdjs.Create_32AccountCode.GDPASSTXTENTObjects1.length === 0 ) ? "" :gdjs.Create_32AccountCode.GDPASSTXTENTObjects1[0].getString()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.Create_32AccountCode.GDNewObject6Objects1);

gdjs.Create_32AccountCode.condition0IsTrue_0.val = false;
gdjs.Create_32AccountCode.condition1IsTrue_0.val = false;
{
gdjs.Create_32AccountCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Create_32AccountCode.mapOfGDgdjs_46Create_9532AccountCode_46GDNewObject6Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Create_32AccountCode.condition0IsTrue_0.val ) {
{
gdjs.Create_32AccountCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Create_32AccountCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebase.auth.createAccountWithEmail(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14)), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)), runtimeScene.getVariables().getFromIndex(0));
}}

}


{


gdjs.Create_32AccountCode.condition0IsTrue_0.val = false;
{
gdjs.Create_32AccountCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "ok";
}if (gdjs.Create_32AccountCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.Create_32AccountCode.GDNewObject8Objects1);
{gdjs.evtTools.firebase.auth.signInWithEmail(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14)), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.auth.userManagement.setDisplayName(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{gdjs.evtTools.firebase.auth.userManagement.sendVerificationEmail();
}{for(var i = 0, len = gdjs.Create_32AccountCode.GDNewObject8Objects1.length ;i < len;++i) {
    gdjs.Create_32AccountCode.GDNewObject8Objects1[i].setString("check your email to verify your account\n    returning to menu in 5 seconds");
}
}{gdjs.evtTools.storage.writeStringInJSONFile("str", "email", gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14)));
}{gdjs.evtTools.storage.writeStringInJSONFile("str", "pass", gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)));
}
{ //Subevents
gdjs.Create_32AccountCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Create_32AccountCode.GDNewObject4Objects1);

gdjs.Create_32AccountCode.condition0IsTrue_0.val = false;
gdjs.Create_32AccountCode.condition1IsTrue_0.val = false;
{
gdjs.Create_32AccountCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Create_32AccountCode.mapOfGDgdjs_46Create_9532AccountCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Create_32AccountCode.condition0IsTrue_0.val ) {
{
gdjs.Create_32AccountCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Create_32AccountCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Create_32AccountCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Create_32AccountCode.GDNewObject5Objects1);

gdjs.Create_32AccountCode.condition0IsTrue_0.val = false;
gdjs.Create_32AccountCode.condition1IsTrue_0.val = false;
{
gdjs.Create_32AccountCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Create_32AccountCode.mapOfGDgdjs_46Create_9532AccountCode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Create_32AccountCode.condition0IsTrue_0.val ) {
{
gdjs.Create_32AccountCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Create_32AccountCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Create_32AccountCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.Create_32AccountCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Create_32AccountCode.GDNewObjectObjects1.length = 0;
gdjs.Create_32AccountCode.GDNewObjectObjects2.length = 0;
gdjs.Create_32AccountCode.GDNewObjectObjects3.length = 0;
gdjs.Create_32AccountCode.GDNewObject2Objects1.length = 0;
gdjs.Create_32AccountCode.GDNewObject2Objects2.length = 0;
gdjs.Create_32AccountCode.GDNewObject2Objects3.length = 0;
gdjs.Create_32AccountCode.GDNewObject3Objects1.length = 0;
gdjs.Create_32AccountCode.GDNewObject3Objects2.length = 0;
gdjs.Create_32AccountCode.GDNewObject3Objects3.length = 0;
gdjs.Create_32AccountCode.GDNewObject4Objects1.length = 0;
gdjs.Create_32AccountCode.GDNewObject4Objects2.length = 0;
gdjs.Create_32AccountCode.GDNewObject4Objects3.length = 0;
gdjs.Create_32AccountCode.GDNewObject5Objects1.length = 0;
gdjs.Create_32AccountCode.GDNewObject5Objects2.length = 0;
gdjs.Create_32AccountCode.GDNewObject5Objects3.length = 0;
gdjs.Create_32AccountCode.GDEmailObjects1.length = 0;
gdjs.Create_32AccountCode.GDEmailObjects2.length = 0;
gdjs.Create_32AccountCode.GDEmailObjects3.length = 0;
gdjs.Create_32AccountCode.GDPasswordObjects1.length = 0;
gdjs.Create_32AccountCode.GDPasswordObjects2.length = 0;
gdjs.Create_32AccountCode.GDPasswordObjects3.length = 0;
gdjs.Create_32AccountCode.GDNewObject6Objects1.length = 0;
gdjs.Create_32AccountCode.GDNewObject6Objects2.length = 0;
gdjs.Create_32AccountCode.GDNewObject6Objects3.length = 0;
gdjs.Create_32AccountCode.GDETXTENTRYObjects1.length = 0;
gdjs.Create_32AccountCode.GDETXTENTRYObjects2.length = 0;
gdjs.Create_32AccountCode.GDETXTENTRYObjects3.length = 0;
gdjs.Create_32AccountCode.GDPASSTXTENTObjects1.length = 0;
gdjs.Create_32AccountCode.GDPASSTXTENTObjects2.length = 0;
gdjs.Create_32AccountCode.GDPASSTXTENTObjects3.length = 0;
gdjs.Create_32AccountCode.GDNewObject7Objects1.length = 0;
gdjs.Create_32AccountCode.GDNewObject7Objects2.length = 0;
gdjs.Create_32AccountCode.GDNewObject7Objects3.length = 0;
gdjs.Create_32AccountCode.GDNewObject8Objects1.length = 0;
gdjs.Create_32AccountCode.GDNewObject8Objects2.length = 0;
gdjs.Create_32AccountCode.GDNewObject8Objects3.length = 0;

gdjs.Create_32AccountCode.eventsList4(runtimeScene);
return;

}

gdjs['Create_32AccountCode'] = gdjs.Create_32AccountCode;
