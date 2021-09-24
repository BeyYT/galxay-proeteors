gdjs.Login_32AccCode = {};
gdjs.Login_32AccCode.GDNewObjectObjects1= [];
gdjs.Login_32AccCode.GDNewObjectObjects2= [];
gdjs.Login_32AccCode.GDNewObjectObjects3= [];
gdjs.Login_32AccCode.GDNewObject2Objects1= [];
gdjs.Login_32AccCode.GDNewObject2Objects2= [];
gdjs.Login_32AccCode.GDNewObject2Objects3= [];
gdjs.Login_32AccCode.GDNewObject3Objects1= [];
gdjs.Login_32AccCode.GDNewObject3Objects2= [];
gdjs.Login_32AccCode.GDNewObject3Objects3= [];
gdjs.Login_32AccCode.GDNewObject4Objects1= [];
gdjs.Login_32AccCode.GDNewObject4Objects2= [];
gdjs.Login_32AccCode.GDNewObject4Objects3= [];
gdjs.Login_32AccCode.GDNewObject5Objects1= [];
gdjs.Login_32AccCode.GDNewObject5Objects2= [];
gdjs.Login_32AccCode.GDNewObject5Objects3= [];
gdjs.Login_32AccCode.GDEmailObjects1= [];
gdjs.Login_32AccCode.GDEmailObjects2= [];
gdjs.Login_32AccCode.GDEmailObjects3= [];
gdjs.Login_32AccCode.GDPasswordObjects1= [];
gdjs.Login_32AccCode.GDPasswordObjects2= [];
gdjs.Login_32AccCode.GDPasswordObjects3= [];
gdjs.Login_32AccCode.GDNewObject6Objects1= [];
gdjs.Login_32AccCode.GDNewObject6Objects2= [];
gdjs.Login_32AccCode.GDNewObject6Objects3= [];
gdjs.Login_32AccCode.GDETXTENTRYObjects1= [];
gdjs.Login_32AccCode.GDETXTENTRYObjects2= [];
gdjs.Login_32AccCode.GDETXTENTRYObjects3= [];
gdjs.Login_32AccCode.GDPASSTXTENTObjects1= [];
gdjs.Login_32AccCode.GDPASSTXTENTObjects2= [];
gdjs.Login_32AccCode.GDPASSTXTENTObjects3= [];
gdjs.Login_32AccCode.GDNewObject7Objects1= [];
gdjs.Login_32AccCode.GDNewObject7Objects2= [];
gdjs.Login_32AccCode.GDNewObject7Objects3= [];
gdjs.Login_32AccCode.GDNewObject8Objects1= [];
gdjs.Login_32AccCode.GDNewObject8Objects2= [];
gdjs.Login_32AccCode.GDNewObject8Objects3= [];

gdjs.Login_32AccCode.conditionTrue_0 = {val:false};
gdjs.Login_32AccCode.condition0IsTrue_0 = {val:false};
gdjs.Login_32AccCode.condition1IsTrue_0 = {val:false};
gdjs.Login_32AccCode.condition2IsTrue_0 = {val:false};
gdjs.Login_32AccCode.conditionTrue_1 = {val:false};
gdjs.Login_32AccCode.condition0IsTrue_1 = {val:false};
gdjs.Login_32AccCode.condition1IsTrue_1 = {val:false};
gdjs.Login_32AccCode.condition2IsTrue_1 = {val:false};


gdjs.Login_32AccCode.eventsList0 = function(runtimeScene) {

{


gdjs.Login_32AccCode.condition0IsTrue_0.val = false;
{
{gdjs.Login_32AccCode.conditionTrue_1 = gdjs.Login_32AccCode.condition0IsTrue_0;
gdjs.Login_32AccCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15306484);
}
}if (gdjs.Login_32AccCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ETXTENTRY"), gdjs.Login_32AccCode.GDETXTENTRYObjects1);
gdjs.copyArray(runtimeScene.getObjects("PASSTXTENT"), gdjs.Login_32AccCode.GDPASSTXTENTObjects1);
{for(var i = 0, len = gdjs.Login_32AccCode.GDETXTENTRYObjects1.length ;i < len;++i) {
    gdjs.Login_32AccCode.GDETXTENTRYObjects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.Login_32AccCode.GDPASSTXTENTObjects1.length ;i < len;++i) {
    gdjs.Login_32AccCode.GDPASSTXTENTObjects1[i].activate(false);
}
}}

}


};gdjs.Login_32AccCode.mapOfGDgdjs_46Login_9532AccCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.Login_32AccCode.GDNewObject6Objects1});gdjs.Login_32AccCode.eventsList1 = function(runtimeScene) {

{


gdjs.Login_32AccCode.condition0IsTrue_0.val = false;
{
{gdjs.Login_32AccCode.conditionTrue_1 = gdjs.Login_32AccCode.condition0IsTrue_0;
gdjs.Login_32AccCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15310492);
}
}if (gdjs.Login_32AccCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "menu");
}}

}


{


gdjs.Login_32AccCode.condition0IsTrue_0.val = false;
{
gdjs.Login_32AccCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "menu");
}if (gdjs.Login_32AccCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "login", false);
}}

}


};gdjs.Login_32AccCode.mapOfGDgdjs_46Login_9532AccCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.Login_32AccCode.GDNewObject4Objects1});gdjs.Login_32AccCode.mapOfGDgdjs_46Login_9532AccCode_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.Login_32AccCode.GDNewObject7Objects1});gdjs.Login_32AccCode.eventsList2 = function(runtimeScene) {

{


gdjs.Login_32AccCode.condition0IsTrue_0.val = false;
{
{gdjs.Login_32AccCode.conditionTrue_1 = gdjs.Login_32AccCode.condition0IsTrue_0;
gdjs.Login_32AccCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15312492);
}
}if (gdjs.Login_32AccCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ETXTENTRY"), gdjs.Login_32AccCode.GDETXTENTRYObjects1);
/* Reuse gdjs.Login_32AccCode.GDNewObject4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.Login_32AccCode.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("PASSTXTENT"), gdjs.Login_32AccCode.GDPASSTXTENTObjects1);
{for(var i = 0, len = gdjs.Login_32AccCode.GDETXTENTRYObjects1.length ;i < len;++i) {
    gdjs.Login_32AccCode.GDETXTENTRYObjects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.Login_32AccCode.GDPASSTXTENTObjects1.length ;i < len;++i) {
    gdjs.Login_32AccCode.GDPASSTXTENTObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.Login_32AccCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.Login_32AccCode.GDNewObject7Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Login_32AccCode.mapOfGDgdjs_46Login_9532AccCode_46GDNewObject7Objects1Objects, (( gdjs.Login_32AccCode.GDNewObject4Objects1.length === 0 ) ? 0 :gdjs.Login_32AccCode.GDNewObject4Objects1[0].getX()) - 45, (( gdjs.Login_32AccCode.GDNewObject4Objects1.length === 0 ) ? 0 :gdjs.Login_32AccCode.GDNewObject4Objects1[0].getY()) - 15, "");
}}

}


};gdjs.Login_32AccCode.mapOfGDgdjs_46Login_9532AccCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.Login_32AccCode.GDNewObject5Objects1});gdjs.Login_32AccCode.mapOfGDgdjs_46Login_9532AccCode_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.Login_32AccCode.GDNewObject7Objects1});gdjs.Login_32AccCode.eventsList3 = function(runtimeScene) {

{


gdjs.Login_32AccCode.condition0IsTrue_0.val = false;
{
{gdjs.Login_32AccCode.conditionTrue_1 = gdjs.Login_32AccCode.condition0IsTrue_0;
gdjs.Login_32AccCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15314556);
}
}if (gdjs.Login_32AccCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ETXTENTRY"), gdjs.Login_32AccCode.GDETXTENTRYObjects1);
/* Reuse gdjs.Login_32AccCode.GDNewObject5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.Login_32AccCode.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("PASSTXTENT"), gdjs.Login_32AccCode.GDPASSTXTENTObjects1);
{for(var i = 0, len = gdjs.Login_32AccCode.GDETXTENTRYObjects1.length ;i < len;++i) {
    gdjs.Login_32AccCode.GDETXTENTRYObjects1[i].activate(false);
}
}{for(var i = 0, len = gdjs.Login_32AccCode.GDPASSTXTENTObjects1.length ;i < len;++i) {
    gdjs.Login_32AccCode.GDPASSTXTENTObjects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.Login_32AccCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.Login_32AccCode.GDNewObject7Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Login_32AccCode.mapOfGDgdjs_46Login_9532AccCode_46GDNewObject7Objects1Objects, (( gdjs.Login_32AccCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.Login_32AccCode.GDNewObject5Objects1[0].getX()) - 45, (( gdjs.Login_32AccCode.GDNewObject5Objects1.length === 0 ) ? 0 :gdjs.Login_32AccCode.GDNewObject5Objects1[0].getY()) - 15, "");
}}

}


};gdjs.Login_32AccCode.eventsList4 = function(runtimeScene) {

{


gdjs.Login_32AccCode.condition0IsTrue_0.val = false;
{
gdjs.Login_32AccCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Login_32AccCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Login_32AccCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ETXTENTRY"), gdjs.Login_32AccCode.GDETXTENTRYObjects1);
gdjs.copyArray(runtimeScene.getObjects("Email"), gdjs.Login_32AccCode.GDEmailObjects1);
gdjs.copyArray(runtimeScene.getObjects("PASSTXTENT"), gdjs.Login_32AccCode.GDPASSTXTENTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.Login_32AccCode.GDPasswordObjects1);
{for(var i = 0, len = gdjs.Login_32AccCode.GDEmailObjects1.length ;i < len;++i) {
    gdjs.Login_32AccCode.GDEmailObjects1[i].setString((( gdjs.Login_32AccCode.GDETXTENTRYObjects1.length === 0 ) ? "" :gdjs.Login_32AccCode.GDETXTENTRYObjects1[0].getString()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(14).setString((( gdjs.Login_32AccCode.GDETXTENTRYObjects1.length === 0 ) ? "" :gdjs.Login_32AccCode.GDETXTENTRYObjects1[0].getString()));
}{for(var i = 0, len = gdjs.Login_32AccCode.GDPasswordObjects1.length ;i < len;++i) {
    gdjs.Login_32AccCode.GDPasswordObjects1[i].setString((( gdjs.Login_32AccCode.GDPASSTXTENTObjects1.length === 0 ) ? "" :gdjs.Login_32AccCode.GDPASSTXTENTObjects1[0].getString()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setString((( gdjs.Login_32AccCode.GDPASSTXTENTObjects1.length === 0 ) ? "" :gdjs.Login_32AccCode.GDPASSTXTENTObjects1[0].getString()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.Login_32AccCode.GDNewObject6Objects1);

gdjs.Login_32AccCode.condition0IsTrue_0.val = false;
gdjs.Login_32AccCode.condition1IsTrue_0.val = false;
{
gdjs.Login_32AccCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Login_32AccCode.mapOfGDgdjs_46Login_9532AccCode_46GDNewObject6Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Login_32AccCode.condition0IsTrue_0.val ) {
{
gdjs.Login_32AccCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Login_32AccCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebase.auth.signInWithEmail(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14)), gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)), runtimeScene.getVariables().getFromIndex(0));
}}

}


{


gdjs.Login_32AccCode.condition0IsTrue_0.val = false;
{
gdjs.Login_32AccCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "ok";
}if (gdjs.Login_32AccCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject8"), gdjs.Login_32AccCode.GDNewObject8Objects1);
{for(var i = 0, len = gdjs.Login_32AccCode.GDNewObject8Objects1.length ;i < len;++i) {
    gdjs.Login_32AccCode.GDNewObject8Objects1[i].setString("Succsessfully Logged In!\n    returning to menu in 5 seconds");
}
}
{ //Subevents
gdjs.Login_32AccCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Login_32AccCode.GDNewObject4Objects1);

gdjs.Login_32AccCode.condition0IsTrue_0.val = false;
gdjs.Login_32AccCode.condition1IsTrue_0.val = false;
{
gdjs.Login_32AccCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Login_32AccCode.mapOfGDgdjs_46Login_9532AccCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Login_32AccCode.condition0IsTrue_0.val ) {
{
gdjs.Login_32AccCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Login_32AccCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Login_32AccCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Login_32AccCode.GDNewObject5Objects1);

gdjs.Login_32AccCode.condition0IsTrue_0.val = false;
gdjs.Login_32AccCode.condition1IsTrue_0.val = false;
{
gdjs.Login_32AccCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Login_32AccCode.mapOfGDgdjs_46Login_9532AccCode_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Login_32AccCode.condition0IsTrue_0.val ) {
{
gdjs.Login_32AccCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Login_32AccCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Login_32AccCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.Login_32AccCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Login_32AccCode.GDNewObjectObjects1.length = 0;
gdjs.Login_32AccCode.GDNewObjectObjects2.length = 0;
gdjs.Login_32AccCode.GDNewObjectObjects3.length = 0;
gdjs.Login_32AccCode.GDNewObject2Objects1.length = 0;
gdjs.Login_32AccCode.GDNewObject2Objects2.length = 0;
gdjs.Login_32AccCode.GDNewObject2Objects3.length = 0;
gdjs.Login_32AccCode.GDNewObject3Objects1.length = 0;
gdjs.Login_32AccCode.GDNewObject3Objects2.length = 0;
gdjs.Login_32AccCode.GDNewObject3Objects3.length = 0;
gdjs.Login_32AccCode.GDNewObject4Objects1.length = 0;
gdjs.Login_32AccCode.GDNewObject4Objects2.length = 0;
gdjs.Login_32AccCode.GDNewObject4Objects3.length = 0;
gdjs.Login_32AccCode.GDNewObject5Objects1.length = 0;
gdjs.Login_32AccCode.GDNewObject5Objects2.length = 0;
gdjs.Login_32AccCode.GDNewObject5Objects3.length = 0;
gdjs.Login_32AccCode.GDEmailObjects1.length = 0;
gdjs.Login_32AccCode.GDEmailObjects2.length = 0;
gdjs.Login_32AccCode.GDEmailObjects3.length = 0;
gdjs.Login_32AccCode.GDPasswordObjects1.length = 0;
gdjs.Login_32AccCode.GDPasswordObjects2.length = 0;
gdjs.Login_32AccCode.GDPasswordObjects3.length = 0;
gdjs.Login_32AccCode.GDNewObject6Objects1.length = 0;
gdjs.Login_32AccCode.GDNewObject6Objects2.length = 0;
gdjs.Login_32AccCode.GDNewObject6Objects3.length = 0;
gdjs.Login_32AccCode.GDETXTENTRYObjects1.length = 0;
gdjs.Login_32AccCode.GDETXTENTRYObjects2.length = 0;
gdjs.Login_32AccCode.GDETXTENTRYObjects3.length = 0;
gdjs.Login_32AccCode.GDPASSTXTENTObjects1.length = 0;
gdjs.Login_32AccCode.GDPASSTXTENTObjects2.length = 0;
gdjs.Login_32AccCode.GDPASSTXTENTObjects3.length = 0;
gdjs.Login_32AccCode.GDNewObject7Objects1.length = 0;
gdjs.Login_32AccCode.GDNewObject7Objects2.length = 0;
gdjs.Login_32AccCode.GDNewObject7Objects3.length = 0;
gdjs.Login_32AccCode.GDNewObject8Objects1.length = 0;
gdjs.Login_32AccCode.GDNewObject8Objects2.length = 0;
gdjs.Login_32AccCode.GDNewObject8Objects3.length = 0;

gdjs.Login_32AccCode.eventsList4(runtimeScene);
return;

}

gdjs['Login_32AccCode'] = gdjs.Login_32AccCode;
