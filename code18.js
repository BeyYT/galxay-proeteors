gdjs.New_32scene7Code = {};

gdjs.New_32scene7Code.conditionTrue_0 = {val:false};
gdjs.New_32scene7Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene7Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene7Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene7Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene7Code.condition0IsTrue_0.val = gdjs.adMob.isVideoShowing();
}if (gdjs.New_32scene7Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).mul(2);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.New_32scene7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.New_32scene7Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene7Code'] = gdjs.New_32scene7Code;
