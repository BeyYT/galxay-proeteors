gdjs.Pause_32MenuCode = {};
gdjs.Pause_32MenuCode.GDNewObjectObjects1= [];
gdjs.Pause_32MenuCode.GDNewObjectObjects2= [];
gdjs.Pause_32MenuCode.GDNewObject2Objects1= [];
gdjs.Pause_32MenuCode.GDNewObject2Objects2= [];
gdjs.Pause_32MenuCode.GDNewObject4Objects1= [];
gdjs.Pause_32MenuCode.GDNewObject4Objects2= [];
gdjs.Pause_32MenuCode.GDNewObject3Objects1= [];
gdjs.Pause_32MenuCode.GDNewObject3Objects2= [];
gdjs.Pause_32MenuCode.GDNewObject5Objects1= [];
gdjs.Pause_32MenuCode.GDNewObject5Objects2= [];

gdjs.Pause_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Pause_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Pause_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Pause_32MenuCode.condition2IsTrue_0 = {val:false};


gdjs.Pause_32MenuCode.mapOfGDgdjs_46Pause_9532MenuCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Pause_32MenuCode.GDNewObjectObjects1});gdjs.Pause_32MenuCode.mapOfGDgdjs_46Pause_9532MenuCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.Pause_32MenuCode.GDNewObject2Objects1});gdjs.Pause_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Pause_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Pause_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Pause_32MenuCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.Pause_32MenuCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.Pause_32MenuCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.Pause_32MenuCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.Pause_32MenuCode.GDNewObject5Objects1);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 640, 480);
}{for(var i = 0, len = gdjs.Pause_32MenuCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.Pause_32MenuCode.GDNewObject5Objects1[i].setOpacity(120);
}
}{for(var i = 0, len = gdjs.Pause_32MenuCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.Pause_32MenuCode.GDNewObject5Objects1[i].setZOrder(gdjs.Pause_32MenuCode.GDNewObject5Objects1[i].getZOrder() - (10));
}
}{for(var i = 0, len = gdjs.Pause_32MenuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.Pause_32MenuCode.GDNewObjectObjects1[i].setZOrder(gdjs.Pause_32MenuCode.GDNewObjectObjects1[i].getZOrder() + (10));
}
}{for(var i = 0, len = gdjs.Pause_32MenuCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.Pause_32MenuCode.GDNewObject2Objects1[i].setZOrder(gdjs.Pause_32MenuCode.GDNewObject2Objects1[i].getZOrder() + (10));
}
}{for(var i = 0, len = gdjs.Pause_32MenuCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.Pause_32MenuCode.GDNewObject4Objects1[i].setZOrder(gdjs.Pause_32MenuCode.GDNewObject4Objects1[i].getZOrder() + (10));
}
}{for(var i = 0, len = gdjs.Pause_32MenuCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.Pause_32MenuCode.GDNewObject3Objects1[i].setZOrder(gdjs.Pause_32MenuCode.GDNewObject3Objects1[i].getZOrder() + (10));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.Pause_32MenuCode.GDNewObjectObjects1);

gdjs.Pause_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Pause_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32MenuCode.mapOfGDgdjs_46Pause_9532MenuCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Pause_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Pause_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Pause_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 180, 90);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.Pause_32MenuCode.GDNewObject2Objects1);

gdjs.Pause_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Pause_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Pause_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Pause_32MenuCode.mapOfGDgdjs_46Pause_9532MenuCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Pause_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Pause_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Pause_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene5", true);
}}

}


};

gdjs.Pause_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pause_32MenuCode.GDNewObjectObjects1.length = 0;
gdjs.Pause_32MenuCode.GDNewObjectObjects2.length = 0;
gdjs.Pause_32MenuCode.GDNewObject2Objects1.length = 0;
gdjs.Pause_32MenuCode.GDNewObject2Objects2.length = 0;
gdjs.Pause_32MenuCode.GDNewObject4Objects1.length = 0;
gdjs.Pause_32MenuCode.GDNewObject4Objects2.length = 0;
gdjs.Pause_32MenuCode.GDNewObject3Objects1.length = 0;
gdjs.Pause_32MenuCode.GDNewObject3Objects2.length = 0;
gdjs.Pause_32MenuCode.GDNewObject5Objects1.length = 0;
gdjs.Pause_32MenuCode.GDNewObject5Objects2.length = 0;

gdjs.Pause_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Pause_32MenuCode'] = gdjs.Pause_32MenuCode;
