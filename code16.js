gdjs.exportCode = {};
gdjs.exportCode.GDNewObjectObjects1= [];
gdjs.exportCode.GDNewObjectObjects2= [];
gdjs.exportCode.GDNewObject2Objects1= [];
gdjs.exportCode.GDNewObject2Objects2= [];
gdjs.exportCode.GDNewObject3Objects1= [];
gdjs.exportCode.GDNewObject3Objects2= [];
gdjs.exportCode.GDNewObject4Objects1= [];
gdjs.exportCode.GDNewObject4Objects2= [];
gdjs.exportCode.GDNewObject5Objects1= [];
gdjs.exportCode.GDNewObject5Objects2= [];
gdjs.exportCode.GDNewObject6Objects1= [];
gdjs.exportCode.GDNewObject6Objects2= [];

gdjs.exportCode.conditionTrue_0 = {val:false};
gdjs.exportCode.condition0IsTrue_0 = {val:false};
gdjs.exportCode.condition1IsTrue_0 = {val:false};
gdjs.exportCode.condition2IsTrue_0 = {val:false};


gdjs.exportCode.mapOfGDgdjs_46exportCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.exportCode.GDNewObjectObjects1});gdjs.exportCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.exportCode.GDNewObjectObjects1);

gdjs.exportCode.condition0IsTrue_0.val = false;
gdjs.exportCode.condition1IsTrue_0.val = false;
{
gdjs.exportCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.exportCode.mapOfGDgdjs_46exportCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.exportCode.condition0IsTrue_0.val ) {
{
gdjs.exportCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.exportCode.condition1IsTrue_0.val) {
{gdjs.fileSystem.saveStringToFile(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "score.sav", runtimeScene.getVariables().getFromIndex(0));
}{gdjs.fileSystem.saveStringToFile(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "name.sav", runtimeScene.getVariables().getFromIndex(0));
}{gdjs.fileSystem.saveStringToFile(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "skin.sav", runtimeScene.getVariables().getFromIndex(0));
}{gdjs.fileSystem.saveStringToFile(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)), gdjs.fileSystem.getDesktopPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "skbuy.sav", runtimeScene.getVariables().getFromIndex(0));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.exportCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.exportCode.GDNewObject5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.exportCode.GDNewObject6Objects1);
{for(var i = 0, len = gdjs.exportCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.exportCode.GDNewObject5Objects1[i].setString((( gdjs.exportCode.GDNewObject4Objects1.length === 0 ) ? "" :gdjs.exportCode.GDNewObject4Objects1[0].getString()));
}
}{for(var i = 0, len = gdjs.exportCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.exportCode.GDNewObject5Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.exportCode.GDNewObject5Objects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.exportCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.exportCode.GDNewObject6Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.exportCode.condition0IsTrue_0.val = false;
{
gdjs.exportCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.exportCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.exportCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.exportCode.GDNewObjectObjects1.length = 0;
gdjs.exportCode.GDNewObjectObjects2.length = 0;
gdjs.exportCode.GDNewObject2Objects1.length = 0;
gdjs.exportCode.GDNewObject2Objects2.length = 0;
gdjs.exportCode.GDNewObject3Objects1.length = 0;
gdjs.exportCode.GDNewObject3Objects2.length = 0;
gdjs.exportCode.GDNewObject4Objects1.length = 0;
gdjs.exportCode.GDNewObject4Objects2.length = 0;
gdjs.exportCode.GDNewObject5Objects1.length = 0;
gdjs.exportCode.GDNewObject5Objects2.length = 0;
gdjs.exportCode.GDNewObject6Objects1.length = 0;
gdjs.exportCode.GDNewObject6Objects2.length = 0;

gdjs.exportCode.eventsList0(runtimeScene);
return;

}

gdjs['exportCode'] = gdjs.exportCode;
