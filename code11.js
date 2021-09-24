gdjs.New_32scene4Code = {};

gdjs.New_32scene4Code.conditionTrue_0 = {val:false};
gdjs.New_32scene4Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene4Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene4Code.eventsList0 = function(runtimeScene) {

{


{
}

}


{



}


{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.fileSystem.saveStringToFile(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)), gdjs.fileSystem.getDesktopPath(runtimeScene) + "sav.sav", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


};

gdjs.New_32scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.New_32scene4Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene4Code'] = gdjs.New_32scene4Code;
