// This file was autogenerated by lib/closure-library/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../../src/app/adminevaluationapp.js', ['vk2.app.AdminEvaluationApp'], ['goog.dom', 'goog.events', 'goog.net.EventType', 'goog.net.XhrIo']);
goog.addDependency('../../../../src/app/georeferenceapp.js', ['vk2.app.GeoreferenceApp'], ['goog.Uri', 'goog.events', 'goog.events.EventType', 'goog.net.XhrIo', 'vk2.georeference.Georeferencer', 'vk2.georeference.GeoreferencerChooser', 'vk2.georeference.GeoreferencerService', 'vk2.georeference.MesstischblattGcpHandler', 'vk2.georeference.ResultViewer', 'vk2.georeference.ZoomifyViewer', 'vk2.georeference.utils', 'vk2.settings', 'vk2.utils', 'vk2.utils.AppLoader']);
goog.addDependency('../../../../src/app/mapprofileapp.js', ['vk2.app.MapProfileApp'], ['vk2.georeference.ZoomifyViewer', 'vk2.settings', 'vk2.tool.MetadataBinding']);
goog.addDependency('../../../../src/control/layerspycontrol.js', ['vk2.control.LayerSpy'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'goog.events.EventType', 'goog.events.KeyCodes', 'goog.events.KeyHandler', 'vk2.utils']);
goog.addDependency('../../../../src/control/permalinkcontrol.js', ['vk2.control.Permalink'], ['goog.events', 'vk2.tool.Permalink', 'vk2.utils']);
goog.addDependency('../../../../src/control/rotatenorthcontrol.js', ['vk2.control.RotateNorth'], ['goog.events']);
goog.addDependency('../../../../src/controller/mapcontroller.js', ['vk2.controller.MapController'], ['goog.array', 'goog.dom', 'goog.events', 'goog.object', 'vk2.control.LayerSpy', 'vk2.control.Permalink', 'vk2.control.RotateNorth', 'vk2.layer.HistoricMap', 'vk2.module.MapSearchModule', 'vk2.module.SpatialTemporalSearchModule', 'vk2.tool.GazetteerSearch', 'vk2.tool.TimeSlider', 'vk2.utils']);
goog.addDependency('../../../../src/factory/layermanagementfactory.js', ['vk2.factory.LayerManagementFactory'], ['goog.dom', 'goog.dom.classes', 'goog.net.cookies', 'goog.style', 'vk2.settings', 'vk2.tool.OpacitySlider', 'vk2.utils']);
goog.addDependency('../../../../src/factory/mapsearchfactory.js', ['vk2.factory.MapSearchFactory'], ['goog.dom', 'goog.dom.classes', 'vk2.settings', 'vk2.utils']);
goog.addDependency('../../../../src/georeference/georeferencer.js', ['vk2.georeference.Georeferencer'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'goog.events.EventType', 'goog.style', 'vk2.georeference.GeoreferencerService', 'vk2.georeference.ZoomifyViewer', 'vk2.utils', 'vk2.utils.Styles']);
goog.addDependency('../../../../src/georeference/georeferencerchooser.js', ['vk2.georeference.GeoreferencerChooser'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'vk2.request.WFS', 'vk2.settings', 'vk2.utils', 'vk2.utils.Modal']);
goog.addDependency('../../../../src/georeference/georeferencerservice.js', ['vk2.georeference.GeoreferencerService'], ['goog.net.XhrIo', 'vk2.settings']);
goog.addDependency('../../../../src/georeference/georeferenceutils.js', ['vk2.georeference.utils'], []);
goog.addDependency('../../../../src/georeference/messtischblattgcphandler.js', ['vk2.georeference.MesstischblattGcpHandler'], ['goog.events', 'goog.object']);
goog.addDependency('../../../../src/georeference/resultviewer.js', ['vk2.georeference.ResultViewer'], ['vk2.control.LayerSpy', 'vk2.layer.Messtischblatt', 'vk2.tool.OpacitySlider', 'vk2.utils']);
goog.addDependency('../../../../src/georeference/zoomifyviewer.js', ['vk2.georeference.ZoomifyViewer'], ['goog.dom', 'goog.events.Event', 'goog.events.EventTarget', 'goog.events.EventType', 'goog.net.XhrIo', 'vk2.settings']);
goog.addDependency('../../../../src/layer/historicmaplayer.js', ['vk2.layer.HistoricMap'], ['goog.events', 'goog.object', 'vk2.settings', 'vk2.utils', 'vk2.utils.Styles']);
goog.addDependency('../../../../src/layer/messtischblattlayer.js', ['vk2.layer.Messtischblatt'], ['vk2.utils']);
goog.addDependency('../../../../src/module/layermanagementmodule.js', ['vk2.module.LayerManagementModule'], ['goog.dom', 'goog.events', 'goog.events.EventTarget', 'goog.events.EventType', 'vk2.factory.LayerManagementFactory']);
goog.addDependency('../../../../src/module/mapsearchmodule.js', ['vk2.module.MapSearchModule'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'goog.events.Event', 'goog.events.EventTarget', 'goog.events.EventType', 'vk2.factory.MapSearchFactory', 'vk2.source.ServerPagination']);
goog.addDependency('../../../../src/module/spatialtemporalsearchmodule.js', ['vk2.module.SpatialTemporalSearchModule'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'vk2.factory.MapSearchFactory', 'vk2.module.MapSearchModule', 'vk2.tool.GazetteerSearch', 'vk2.tool.TimeSlider']);
goog.addDependency('../../../../src/request/cswrequest.js', ['vk2.request.CSW'], ['goog.array', 'goog.dom', 'goog.events', 'goog.events.EventTarget', 'goog.net.EventType', 'goog.net.XhrIo', 'goog.object', 'vk2.settings']);
goog.addDependency('../../../../src/request/wfsrequest.js', ['vk2.request.WFS'], ['vk2.settings']);
goog.addDependency('../../../../src/settings.js', ['vk2.settings'], []);
goog.addDependency('../../../../src/source/serverpaginationsource.js', ['vk2.source.ServerPagination'], ['goog.array', 'goog.events', 'goog.events.EventTarget', 'goog.events.EventType', 'goog.net.XhrIo', 'vk2.request.WFS', 'vk2.settings', 'vk2.utils']);
goog.addDependency('../../../../src/tool/gazetteersearchtool.js', ['vk2.tool.GazetteerSearch', 'vk2.tool.GazetteerSearch.EventType'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'goog.events.Event', 'goog.events.EventTarget', 'goog.net.XhrIo', 'vk2.utils', 'vk2.validation']);
goog.addDependency('../../../../src/tool/metadatabindingtool.js', ['vk2.tool.MetadataBinding'], ['goog.Uri', 'goog.dom', 'goog.object', 'goog.style', 'vk2.request.CSW', 'vk2.settings', 'vk2.utils']);
goog.addDependency('../../../../src/tool/opacityslidertool.js', ['vk2.tool.OpacitySlider'], ['goog.dom']);
goog.addDependency('../../../../src/tool/permalinktool.js', ['vk2.tool.Permalink'], ['goog.Uri', 'goog.Uri.QueryData', 'goog.events.Event', 'goog.events.EventTarget', 'goog.events.EventType', 'goog.net.XhrIo', 'vk2.request.WFS']);
goog.addDependency('../../../../src/tool/timeslidertool.js', ['vk2.tool.TimeSlider'], ['goog.dom', 'goog.events', 'goog.events.EventTarget', 'goog.events.EventType']);
goog.addDependency('../../../../src/utils.js', ['vk2.utils'], ['goog.Uri', 'goog.dom', 'goog.dom.classes', 'goog.net.cookies', 'goog.style']);
goog.addDependency('../../../../src/utils/apploader.js', ['vk2.utils.AppLoader'], ['goog.Uri', 'goog.dom', 'goog.events', 'goog.events.EventType', 'goog.net.XhrIo', 'vk2.controller.MapController', 'vk2.georeference.Georeferencer', 'vk2.georeference.GeoreferencerChooser', 'vk2.georeference.GeoreferencerService', 'vk2.georeference.MesstischblattGcpHandler', 'vk2.georeference.ResultViewer', 'vk2.georeference.ZoomifyViewer', 'vk2.georeference.utils', 'vk2.module.LayerManagementModule', 'vk2.module.SpatialTemporalSearchModule', 'vk2.settings', 'vk2.tool.Permalink', 'vk2.utils', 'vk2.utils.Modal', 'vk2.validation']);
goog.addDependency('../../../../src/utils/modal.js', ['vk2.utils.Modal'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'goog.style']);
goog.addDependency('../../../../src/utils/styles.js', ['vk2.utils.Styles'], []);
goog.addDependency('../../../../src/validation.js', ['vk2.validation'], ['goog.dom', 'goog.dom.classes', 'vk2.utils']);
goog.addDependency('../../../../src/vkviewer.js', ['vk2'], []);
