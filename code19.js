gdjs.New_32scene8Code = {};
gdjs.New_32scene8Code.GDNewObjectObjects1= [];
gdjs.New_32scene8Code.GDNewObjectObjects2= [];
gdjs.New_32scene8Code.GDNewObject2Objects1= [];
gdjs.New_32scene8Code.GDNewObject2Objects2= [];
gdjs.New_32scene8Code.GDNewObject3Objects1= [];
gdjs.New_32scene8Code.GDNewObject3Objects2= [];
gdjs.New_32scene8Code.GDNewObject4Objects1= [];
gdjs.New_32scene8Code.GDNewObject4Objects2= [];

gdjs.New_32scene8Code.conditionTrue_0 = {val:false};
gdjs.New_32scene8Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene8Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene8Code.condition2IsTrue_0 = {val:false};


gdjs.New_32scene8Code.mapOfGDgdjs_46New_9532scene8Code_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.New_32scene8Code.GDNewObject4Objects1});gdjs.New_32scene8Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene8Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene8Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32scene8Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene8Code.GDNewObject3Objects1[i].setString((( gdjs.New_32scene8Code.GDNewObject2Objects1.length === 0 ) ? "" :gdjs.New_32scene8Code.GDNewObject2Objects1[0].getString()));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene8Code.GDNewObject4Objects1);

gdjs.New_32scene8Code.condition0IsTrue_0.val = false;
gdjs.New_32scene8Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene8Code.mapOfGDgdjs_46New_9532scene8Code_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene8Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.New_32scene8Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene8Code.GDNewObject2Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.New_32scene8Code.GDNewObject2Objects1.length === 0 ) ? "" :gdjs.New_32scene8Code.GDNewObject2Objects1[0].getString()));
}{gdjs.evtTools.storage.writeStringInJSONFile("str", "name", gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("str", "hasname", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(12)));
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


gdjs.New_32scene8Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene8Code.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.New_32scene8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene8Code.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32scene8Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene8Code.GDNewObject2Objects1[i].getBehavior("TextEntryVirtualKeyboard").openKeyboard((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.New_32scene8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene8Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene8Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene8Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene8Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene8Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene8Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene8Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene8Code.GDNewObject4Objects2.length = 0;

gdjs.New_32scene8Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene8Code'] = gdjs.New_32scene8Code;
