gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDNewObjectObjects3= [];
gdjs.New_32scene2Code.GDNewObjectObjects4= [];
gdjs.New_32scene2Code.GDNewObject2Objects1= [];
gdjs.New_32scene2Code.GDNewObject2Objects2= [];
gdjs.New_32scene2Code.GDNewObject2Objects3= [];
gdjs.New_32scene2Code.GDNewObject2Objects4= [];
gdjs.New_32scene2Code.GDNewObject3Objects1= [];
gdjs.New_32scene2Code.GDNewObject3Objects2= [];
gdjs.New_32scene2Code.GDNewObject3Objects3= [];
gdjs.New_32scene2Code.GDNewObject3Objects4= [];
gdjs.New_32scene2Code.GDNewObject4Objects1= [];
gdjs.New_32scene2Code.GDNewObject4Objects2= [];
gdjs.New_32scene2Code.GDNewObject4Objects3= [];
gdjs.New_32scene2Code.GDNewObject4Objects4= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition2IsTrue_0 = {val:false};
gdjs.New_32scene2Code.conditionTrue_1 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_1 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_1 = {val:false};
gdjs.New_32scene2Code.condition2IsTrue_1 = {val:false};


gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition0IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14885220);
}
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gotomenu");
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "gotomenu");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene5", false);
}}

}


};gdjs.New_32scene2Code.eventsList1 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene2Code.GDNewObjectObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects2);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject2Objects2.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject2Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects2.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects2[i].setString("no new updates found.");
}
}
{ //Subevents
gdjs.New_32scene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 3;
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene2Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene2Code.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene2Code.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].setString("new update found,\nwould you like to install it?");
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject4Objects1[i].hide(false);
}
}}

}


};gdjs.New_32scene2Code.eventsList2 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition0IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14888444);
}
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene2Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].setString("checking for updates");
}
}}

}


};gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene2Code.GDNewObject3Objects1});gdjs.New_32scene2Code.eventsList3 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition0IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14890092);
}
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "owowowowowo");
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "owowowowowo");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.New_32scene2Code.GDNewObject4Objects1});gdjs.New_32scene2Code.eventsList4 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene2Code.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene2Code.GDNewObject4Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "check");
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject4Objects1[i].hide();
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "check");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32scene2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "check");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.firebase.database.getField("/", "alphaver", runtimeScene.getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.New_32scene2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene2Code.GDNewObject3Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("https://cdx-team.itch.io/gaxprt-beta", runtimeScene);
}
{ //Subevents
gdjs.New_32scene2Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene2Code.GDNewObject4Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene2Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene5", false);
}}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects3.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects4.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects3.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects4.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects3.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects4.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects3.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects4.length = 0;

gdjs.New_32scene2Code.eventsList4(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
