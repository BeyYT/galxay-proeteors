gdjs.ScoreCode = {};
gdjs.ScoreCode.GDNewObjectObjects1= [];
gdjs.ScoreCode.GDNewObjectObjects2= [];
gdjs.ScoreCode.GDNewObject2Objects1= [];
gdjs.ScoreCode.GDNewObject2Objects2= [];

gdjs.ScoreCode.conditionTrue_0 = {val:false};
gdjs.ScoreCode.condition0IsTrue_0 = {val:false};
gdjs.ScoreCode.condition1IsTrue_0 = {val:false};


gdjs.ScoreCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.ScoreCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.ScoreCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.ScoreCode.GDNewObject2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.ScoreCode.condition0IsTrue_0.val = false;
{
gdjs.ScoreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ScoreCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 640, 480);
}}

}


};

gdjs.ScoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ScoreCode.GDNewObjectObjects1.length = 0;
gdjs.ScoreCode.GDNewObjectObjects2.length = 0;
gdjs.ScoreCode.GDNewObject2Objects1.length = 0;
gdjs.ScoreCode.GDNewObject2Objects2.length = 0;

gdjs.ScoreCode.eventsList0(runtimeScene);
return;

}

gdjs['ScoreCode'] = gdjs.ScoreCode;
