gdjs.New_32scene10Code = {};
gdjs.New_32scene10Code.GDNewObjectObjects1= [];
gdjs.New_32scene10Code.GDNewObjectObjects2= [];

gdjs.New_32scene10Code.conditionTrue_0 = {val:false};
gdjs.New_32scene10Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene10Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene10Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene10Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "aaa");
}}

}


{


gdjs.New_32scene10Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "aaa");
}if (gdjs.New_32scene10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene9", false);
}}

}


};

gdjs.New_32scene10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene10Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene10Code.GDNewObjectObjects2.length = 0;

gdjs.New_32scene10Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene10Code'] = gdjs.New_32scene10Code;
