gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];
gdjs.New_32sceneCode.GDNewObject4Objects1= [];
gdjs.New_32sceneCode.GDNewObject4Objects2= [];
gdjs.New_32sceneCode.GDNewObject5Objects1= [];
gdjs.New_32sceneCode.GDNewObject5Objects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "rgb");
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.4, "rgb");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].setAnimation(gdjs.New_32sceneCode.GDNewObject2Objects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "rgb");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObject2Objects1[i].getAnimation() == 3 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObject2Objects1[k] = gdjs.New_32sceneCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObject2Objects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].setAnimation(0);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", true);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32sceneCode.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject3Objects1[i].setString("Touch to begin");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
