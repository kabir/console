$wnd.hal.runAsyncCallback16("defineClass(1040, 1, {1:1});\n_.com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________ = function com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________(invokee, _0){\n  invokee.automaticBind(_0);\n}\n;\nfunction $clinit_AddressTemplates_3(){\n  $clinit_AddressTemplates_3 = emptyMethod;\n  SERVICE_DEFAULT_BINDINGS_ADDRESS = '/{selected.profile}/subsystem=ee' + '/service=default-bindings';\n  CONTEXT_SERVICE_ADDRESS = '/{selected.profile}/subsystem=ee' + '/context-service=*';\n  MANAGED_EXECUTOR_ADDRESS = '/{selected.profile}/subsystem=ee' + '/managed-executor-service=*';\n  MANAGED_EXECUTOR_SCHEDULED_ADDRESS = '/{selected.profile}/subsystem=ee' + '/managed-scheduled-executor-service=*';\n  MANAGED_THREAD_FACTORY_ADDRESS = '/{selected.profile}/subsystem=ee' + '/managed-thread-factory=*';\n  SERVICE_DEFAULT_BINDINGS_TEMPLATE = of_14('/{selected.profile}/subsystem=ee/service=default-bindings');\n  CONTEXT_SERVICE_TEMPLATE = of_14('/{selected.profile}/subsystem=ee/context-service=*');\n  MANAGED_EXECUTOR_TEMPLATE = of_14('/{selected.profile}/subsystem=ee/managed-executor-service=*');\n  MANAGED_EXECUTOR_SCHEDULED_TEMPLATE = of_14('/{selected.profile}/subsystem=ee/managed-scheduled-executor-service=*');\n  MANAGED_THREAD_FACTORY_TEMPLATE = of_14('/{selected.profile}/subsystem=ee/managed-thread-factory=*');\n  EE_SUBSYSTEM_TEMPLATE = of_17(($clinit_StatementContext$Tuple() , SELECTED_PROFILE), 'subsystem=ee');\n}\n\nvar CONTEXT_SERVICE_ADDRESS, CONTEXT_SERVICE_TEMPLATE, EE_SUBSYSTEM_TEMPLATE, MANAGED_EXECUTOR_ADDRESS, MANAGED_EXECUTOR_SCHEDULED_ADDRESS, MANAGED_EXECUTOR_SCHEDULED_TEMPLATE, MANAGED_EXECUTOR_TEMPLATE, MANAGED_THREAD_FACTORY_ADDRESS, MANAGED_THREAD_FACTORY_TEMPLATE, SERVICE_DEFAULT_BINDINGS_ADDRESS, SERVICE_DEFAULT_BINDINGS_TEMPLATE;\nfunction $clinit_EEPresenter(){\n  $clinit_EEPresenter = emptyMethod;\n  $clinit_ApplicationFinderPresenter();\n}\n\nfunction EEPresenter(eventBus, view, proxy, finder, crud, finderPathFactory, resources, dispatcher, statementContext, metadataRegistry){\n  $clinit_EEPresenter();\n  ApplicationFinderPresenter.call(this, eventBus, view, proxy, finder);\n  this.$init_941();\n  this.crud = crud;\n  this.finderPathFactory = finderPathFactory;\n  this.resources = resources;\n  this.dispatcher = dispatcher;\n  this.statementContext = statementContext;\n  this.eventBus = eventBus;\n  this.globalModulesMetadata = globalModulesMetadata_0(metadataRegistry);\n}\n\nfunction globalModulesMetadata_0(metadataRegistry){\n  $clinit_EEPresenter();\n  var globalModules, globalModulesDescription, metadata, repackaged;\n  metadata = castTo(metadataRegistry.lookup_1(($clinit_AddressTemplates_3() , EE_SUBSYSTEM_TEMPLATE)), 23);\n  globalModules = metadata.getDescription_0().findAttribute_0('attributes', 'global-modules');\n  if (isNotNull(globalModules) && globalModules.getValue_3().hasDefined('value-type')) {\n    repackaged = new ModelNode;\n    repackaged.get_17('description').set_9(globalModules.getValue_3().get_17('description').asString());\n    repackaged.get_17('attributes').set_15(globalModules.getValue_3().get_17('value-type'));\n    globalModulesDescription = new ResourceDescription(repackaged);\n  }\n   else {\n    globalModulesDescription = new ResourceDescription(new ModelNode);\n  }\n  return new Metadata(metadata.getTemplate_0(), metadata.getSecurityContext(), globalModulesDescription, metadata.getCapabilities());\n}\n\ndefineClass(506, 155, {58:1, 45:1, 1:1, 28:1, 27:1, 506:1, 130:1, 97:1}, EEPresenter);\n_.$init_941 = function $init_941(){\n}\n;\n_.lambda$0_56 = function lambda$0_108(result_0){\n  $clinit_EEPresenter();\n  castTo(this.getView(), 3439).update_8(result_0);\n}\n;\n_.lambda$1_27 = function lambda$1_56(name_0, globalModule_1){\n  $clinit_EEPresenter();\n  var address, operation;\n  {\n    address = ($clinit_AddressTemplates_3() , EE_SUBSYSTEM_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n    operation = (new Operation$Builder('list-add', address)).param_0('name', 'global-modules').param_1('value', globalModule_1).build_17();\n    this.dispatcher.execute_15(operation, new EEPresenter$lambda$3$Type(this, name_0));\n  }\n}\n;\n_.lambda$2_20 = function lambda$2_42(globalModule_1, name_2){\n  $clinit_EEPresenter();\n  var address, operation;\n  {\n    address = ($clinit_AddressTemplates_3() , EE_SUBSYSTEM_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n    operation = (new Operation$Builder('list-remove', address)).param_0('name', 'global-modules').param_1('value', globalModule_1).build_17();\n    this.dispatcher.execute_15(operation, new EEPresenter$lambda$4$Type(this, name_2));\n  }\n}\n;\n_.lambda$3_18 = function lambda$3_31(name_1, result_1){\n  $clinit_EEPresenter();\n  {\n    fire_18(this.eventBus, success_6(this.resources.messages_0().addResourceSuccess('Global Modules', name_1)));\n    this.reload_0();\n  }\n}\n;\n_.lambda$4_15 = function lambda$4_26(name_1, result_1){\n  $clinit_EEPresenter();\n  {\n    fire_18(this.eventBus, success_6(this.resources.messages_0().removeResourceSuccess('Global Modules', name_1)));\n    this.reload_0();\n  }\n}\n;\n_.finderPath = function finderPath_5(){\n  return this.finderPathFactory.subsystemPath(($clinit_AddressTemplates_3() , EE_SUBSYSTEM_TEMPLATE).lastValue());\n}\n;\n_.launchAddDialogGlobalModule = function launchAddDialogGlobalModule(){\n  var dialog, form_0;\n  form_0 = (new ModelNodeForm$Builder(($clinit_Ids() , EE_GLOBAL_MODULES_FORM), this.globalModulesMetadata)).addOnly_0().include_6('name', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['slot', 'annotations', 'services', 'meta-inf'])).unsorted_0().build_15();\n  dialog = new AddResourceDialog_1(this.resources.messages_0().addResourceTitle('Global Modules'), form_0, new EEPresenter$lambda$1$Type(this));\n  dialog.show_0();\n}\n;\n_.onBind = function onBind_8(){\n  getClassPrototype(78).onBind.call(this);\n  castTo(this.getView(), 3439).setPresenter(this);\n}\n;\n_.reload_0 = function reload_6(){\n  this.crud.readRecursive_0(($clinit_AddressTemplates_3() , EE_SUBSYSTEM_TEMPLATE), new EEPresenter$lambda$0$Type(this));\n}\n;\n_.removeGlobalModule = function removeGlobalModule(globalModule){\n  var name_0;\n  name_0 = globalModule.get_17('name').asString();\n  showConfirmation_0(this.resources.messages_0().removeResourceConfirmationTitle('Global Modules'), this.resources.messages_0().removeResourceConfirmationQuestion(name_0), makeLambdaFunction(EEPresenter$lambda$2$Type.prototype.execute_0, EEPresenter$lambda$2$Type, [this, globalModule, name_0]));\n}\n;\n_.resourceAddress = function resourceAddress_4(){\n  return ($clinit_AddressTemplates_3() , EE_SUBSYSTEM_TEMPLATE).resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n}\n;\n_.save_1 = function save_2(addressTemplate, changedValues, successMessage){\n  this.crud.save_8(addressTemplate.resolve_3(this.statementContext, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, [])), changedValues, successMessage, makeLambdaFunction(EEPresenter$0methodref$reload$Type.prototype.execute_0, EEPresenter$0methodref$reload$Type, [this]));\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEPresenter_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.ee', 'EEPresenter', 506, Lorg_jboss_hal_core_mvp_ApplicationFinderPresenter_2_classLit);\nfunction $clinit_EEPresenter$0methodref$reload$Type(){\n  $clinit_EEPresenter$0methodref$reload$Type = emptyMethod;\n}\n\nfunction EEPresenter$0methodref$reload$Type($$outer_0){\n  $clinit_EEPresenter$0methodref$reload$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4363, $wnd.Function, {1:1}, EEPresenter$0methodref$reload$Type);\n_.execute_0 = function execute_108(){\n  this.$$outer_0.reload_0();\n}\n;\nfunction $clinit_EEPresenter$MyView(){\n  $clinit_EEPresenter$MyView = emptyMethod;\n}\n\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEPresenter$MyView_2_classLit = createForInterface('org.jboss.hal.client.configuration.subsystem.ee', 'EEPresenter/MyView');\nfunction $clinit_EEPresenter$lambda$0$Type(){\n  $clinit_EEPresenter$lambda$0$Type = emptyMethod;\n}\n\nfunction EEPresenter$lambda$0$Type($$outer_0){\n  $clinit_EEPresenter$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1289, 1, {1:1}, EEPresenter$lambda$0$Type);\n_.execute_9 = function execute_109(arg0){\n  this.$$outer_0.lambda$0_56(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEPresenter$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.ee', 'EEPresenter/lambda$0$Type', 1289, Ljava_lang_Object_2_classLit);\nfunction $clinit_EEPresenter$lambda$1$Type(){\n  $clinit_EEPresenter$lambda$1$Type = emptyMethod;\n}\n\nfunction EEPresenter$lambda$1$Type($$outer_0){\n  $clinit_EEPresenter$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1291, 1, {1:1}, EEPresenter$lambda$1$Type);\n_.onAdd = function onAdd_3(arg0, arg1){\n  this.$$outer_0.lambda$1_27(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEPresenter$lambda$1$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.ee', 'EEPresenter/lambda$1$Type', 1291, Ljava_lang_Object_2_classLit);\nfunction $clinit_EEPresenter$lambda$2$Type(){\n  $clinit_EEPresenter$lambda$2$Type = emptyMethod;\n}\n\nfunction EEPresenter$lambda$2$Type($$outer_0, globalModule_1, name_2){\n  $clinit_EEPresenter$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n  this.globalModule_1 = globalModule_1;\n  this.name_2 = name_2;\n}\n\ndefineClass(4364, $wnd.Function, {1:1}, EEPresenter$lambda$2$Type);\n_.execute_0 = function execute_110(){\n  this.$$outer_0.lambda$2_20(this.globalModule_1, this.name_2);\n}\n;\nfunction $clinit_EEPresenter$lambda$3$Type(){\n  $clinit_EEPresenter$lambda$3$Type = emptyMethod;\n}\n\nfunction EEPresenter$lambda$3$Type($$outer_0, name_1){\n  $clinit_EEPresenter$lambda$3$Type();\n  this.$$outer_0 = $$outer_0;\n  this.name_1 = name_1;\n}\n\ndefineClass(1290, 1, {1:1, 31:1}, EEPresenter$lambda$3$Type);\n_.onSuccess_0 = function onSuccess_80(arg0){\n  this.$$outer_0.lambda$3_18(this.name_1, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEPresenter$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.ee', 'EEPresenter/lambda$3$Type', 1290, Ljava_lang_Object_2_classLit);\nfunction $clinit_EEPresenter$lambda$4$Type(){\n  $clinit_EEPresenter$lambda$4$Type = emptyMethod;\n}\n\nfunction EEPresenter$lambda$4$Type($$outer_0, name_1){\n  $clinit_EEPresenter$lambda$4$Type();\n  this.$$outer_0 = $$outer_0;\n  this.name_1 = name_1;\n}\n\ndefineClass(1292, 1, {1:1, 31:1}, EEPresenter$lambda$4$Type);\n_.onSuccess_0 = function onSuccess_81(arg0){\n  this.$$outer_0.lambda$4_15(this.name_1, arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEPresenter$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.ee', 'EEPresenter/lambda$4$Type', 1292, Ljava_lang_Object_2_classLit);\nfunction $clinit_EEView(){\n  $clinit_EEView = emptyMethod;\n  $clinit_HalViewImpl();\n  $clinit_HalView();\n}\n\nfunction EEView(metadataRegistry, tableButtonFactory, resources){\n  $clinit_EEView();\n  var defaultBindingsForm, defaultBindingsMetadata, eeAttributesForm, eeMetadata, globalModulesMetadata, layoutBuilder, navigationElement, options, root;\n  HalViewImpl.call(this);\n  this.$init_944();\n  this.metadataRegistry = metadataRegistry;\n  this.tableButtonFactory = tableButtonFactory;\n  this.resources = resources;\n  this.forms_0 = new HashMap;\n  this.tables = new HashMap_0(4);\n  this.navigation = new VerticalNavigation;\n  this.registerAttachable(this.navigation, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  eeMetadata = castTo(metadataRegistry.lookup_1(($clinit_AddressTemplates_3() , EE_SUBSYSTEM_TEMPLATE)), 23);\n  eeAttributesForm = (new ModelNodeForm$Builder(($clinit_Ids() , EE_ATTRIBUTES_FORM), eeMetadata)).onSave_1(new EEView$lambda$0$Type(this, resources)).build_15();\n  this.forms_0.put_0(($clinit_Ids() , EE_ATTRIBUTES_FORM), eeAttributesForm);\n  this.registerAttachable(eeAttributesForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  navigationElement = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).h_1(1), 3).textContent_0('Deployments'), 3).end(), 3).p(), 3).textContent_0(eeMetadata.getDescription_0().getDescription()), 3).end(), 3).add_10(eeAttributesForm.asElement_0()), 3).end(), 3).build_2();\n  this.navigation.addPrimary_0(($clinit_Ids() , EE_ATTRIBUTES_ENTRY), 'Deployments', fontAwesome('archive'), navigationElement);\n  globalModulesMetadata = globalModulesMetadata_0(metadataRegistry);\n  options = castTo(castTo((new ModelNodeTable$Builder(globalModulesMetadata)).columns_2('name', stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['slot', 'annotations', 'services', 'meta-inf'])).button_3(resources.constants_0().add_46(), makeLambdaFunction(EEView$lambda$1$Type.prototype.action_4, EEView$lambda$1$Type, [this])), 12).button_4(resources.constants_0().remove_21(), ($clinit_Button$Scope() , SELECTED_0), makeLambdaFunction(EEView$lambda$2$Type.prototype.action_4, EEView$lambda$2$Type, [this])), 12).build_8();\n  this.globalModulesTable = new ModelNodeTable(($clinit_Ids() , EE_GLOBAL_MODULES_TABLE), options);\n  this.registerAttachable(this.globalModulesTable, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  navigationElement = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).h_1(1), 3).textContent_0('Global Modules'), 3).end(), 3).p(), 3).textContent_0(globalModulesMetadata.getDescription_0().getDescription()), 3).end(), 3).add_10(this.globalModulesTable.asElement_0()), 3).end(), 3).build_2();\n  this.navigation.addPrimary_0(($clinit_Ids() , EE_GLOBAL_MODULES_ENTRY), 'Global Modules', fontAwesome('cube'), navigationElement);\n  defaultBindingsMetadata = castTo(metadataRegistry.lookup_1(($clinit_AddressTemplates_3() , SERVICE_DEFAULT_BINDINGS_TEMPLATE)), 23);\n  defaultBindingsForm = (new ModelNodeForm$Builder(($clinit_Ids() , EE_DEFAULT_BINDINGS_FORM), defaultBindingsMetadata)).onSave_1(new EEView$lambda$3$Type(this, resources)).build_15();\n  this.forms_0.put_0(($clinit_Ids() , EE_DEFAULT_BINDINGS_FORM), defaultBindingsForm);\n  this.registerAttachable(defaultBindingsForm, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  navigationElement = castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).div_0(), 3).h_1(1), 3).textContent_0('Default Bindings'), 3).end(), 3).p(), 3).textContent_0(defaultBindingsMetadata.getDescription_0().getDescription()), 3).end(), 3).add_10(defaultBindingsForm.asElement_0()), 3).end(), 3).build_2();\n  this.navigation.addPrimary_0(($clinit_Ids() , EE_DEFAULT_BINDINGS_ENTRY), 'Default Bindings', fontAwesome('link'), navigationElement);\n  this.navigation.addPrimary(($clinit_Ids() , EE_SERVICES_ENTRY), 'Services', fontAwesome('cogs'));\n  this.navigation.addSecondary(($clinit_Ids() , EE_SERVICES_ENTRY), ($clinit_Ids() , EE_CONTEXT_SERVICE), 'Context Service', this.buildServicePanel(($clinit_Ids() , EE_CONTEXT_SERVICE), ($clinit_AddressTemplates_3() , CONTEXT_SERVICE_TEMPLATE), 'Context Service'));\n  this.navigation.addSecondary(($clinit_Ids() , EE_SERVICES_ENTRY), ($clinit_Ids() , EE_MANAGED_EXECUTOR), 'Executor', this.buildServicePanel(($clinit_Ids() , EE_MANAGED_EXECUTOR), ($clinit_AddressTemplates_3() , MANAGED_EXECUTOR_TEMPLATE), 'Executor'));\n  this.navigation.addSecondary(($clinit_Ids() , EE_SERVICES_ENTRY), ($clinit_Ids() , EE_MANAGED_EXECUTOR_SCHEDULED), 'Scheduled Executor', this.buildServicePanel(($clinit_Ids() , EE_MANAGED_EXECUTOR_SCHEDULED), ($clinit_AddressTemplates_3() , MANAGED_EXECUTOR_SCHEDULED_TEMPLATE), 'Scheduled Executor'));\n  this.navigation.addSecondary(($clinit_Ids() , EE_SERVICES_ENTRY), ($clinit_Ids() , EE_MANAGED_THREAD_FACTORY), 'Thread Factories', this.buildServicePanel(($clinit_Ids() , EE_MANAGED_THREAD_FACTORY), ($clinit_AddressTemplates_3() , MANAGED_THREAD_FACTORY_TEMPLATE), 'Thread Factories'));\n  layoutBuilder = castTo(castTo(castTo((new LayoutBuilder).row_0().column_2().addAll_0(this.navigation.panes_0()), 8).end(), 8).end(), 8);\n  root = layoutBuilder.build_2();\n  this.initElement(root);\n}\n\nfunction lambda$5_16(cell_0, t_1, row_2, meta_3){\n  $clinit_EEView();\n  return row_2.getName();\n}\n\nfunction lambda$7_11(api_0){\n  $clinit_EEView();\n  return castTo($selectedRow(api_0), 17).getName();\n}\n\ndefineClass(1678, 63, {1:1, 28:1, 27:1, 3439:1, 48:1}, EEView);\n_.$init_944 = function $init_944(){\n}\n;\n_.lambda$0_57 = function lambda$0_109(resources_1, f_1, changedValues_2){\n  $clinit_EEView();\n  this.presenter.save_1(($clinit_AddressTemplates_3() , EE_SUBSYSTEM_TEMPLATE), changedValues_2, resources_1.messages_0().modifyResourceSuccess('EE', resources_1.constants_0().deploymentAttributes()));\n}\n;\n_.lambda$1_28 = function lambda$1_57(event_0, api_1){\n  $clinit_EEView();\n  this.presenter.launchAddDialogGlobalModule();\n}\n;\n_.lambda$2_21 = function lambda$2_43(event_0, api_1){\n  $clinit_EEView();\n  this.presenter.removeGlobalModule(castTo($selectedRow(api_1), 14));\n}\n;\n_.lambda$3_19 = function lambda$3_32(resources_1, form_1, changedValues_2){\n  $clinit_EEView();\n  this.presenter.save_1(($clinit_AddressTemplates_3() , SERVICE_DEFAULT_BINDINGS_TEMPLATE), changedValues_2, resources_1.messages_0().modifyResourceSuccess('EE', 'Default Bindings'));\n}\n;\n_.lambda$4_16 = function lambda$4_27(id_0, table_1){\n  $clinit_EEView();\n  {\n    if (this.forms_0.containsKey(id_0)) {\n      table_1.bindForm(castTo(this.forms_0.get_3(id_0), 157));\n    }\n  }\n}\n;\n_.lambda$6_7 = function lambda$6_13(name_0, address_1){\n  $clinit_EEView();\n  this.presenter.reload_0();\n}\n;\n_.lambda$8_6 = function lambda$8_9(){\n  $clinit_EEView();\n  this.presenter.reload_0();\n}\n;\n_.lambda$9_5 = function lambda$9_9(template_1, table_2, f_2, changedValues_3){\n  $clinit_EEView();\n  var fullyQualified;\n  {\n    fullyQualified = template_1.replaceWildcards(castTo($selectedRow(table_2.api_0()), 17).getName(), stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, []));\n    this.presenter.save_1(fullyQualified, changedValues_3, this.resources.messages_0().modifyResourceSuccess('EE', template_1.lastKey()));\n  }\n}\n;\n_.setPresenter = function setPresenter_3(presenter){\n  this.setPresenter_2(castTo(presenter, 506));\n}\n;\n_.attach = function attach_19(){\n  getClassPrototype(63).attach.call(this);\n  this.tables.forEach_0(new EEView$lambda$4$Type(this));\n}\n;\n_.buildServicePanel = function buildServicePanel(baseId, template, type_0){\n  var form_0, metadata, options, table;\n  metadata = castTo(this.metadataRegistry.lookup_1(template), 23);\n  options = castTo(castTo(castTo((new ModelNodeTable$Builder(metadata)).column_8('name', makeLambdaFunction(EEView$lambda$5$Type.prototype.render_2, EEView$lambda$5$Type, [])), 12).button_5(this.tableButtonFactory.add_36(build_21(baseId, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['add'])), type_0, template, new EEView$lambda$6$Type(this))), 12).button_5(this.tableButtonFactory.remove_18(type_0, template, new EEView$lambda$7$Type, makeLambdaFunction(EEView$lambda$8$Type.prototype.execute_0, EEView$lambda$8$Type, [this]))), 12).build_8();\n  table = new NamedNodeTable(build_21(baseId, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['table'])), options);\n  this.registerAttachable(table, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  this.tables.put_0(template.lastKey(), table);\n  form_0 = (new ModelNodeForm$Builder(build_21(baseId, stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), {4:1, 1:1, 5:1, 6:1}, 2, 6, ['form'])), metadata)).onSave_1(new EEView$lambda$9$Type(this, template, table)).build_15();\n  this.forms_0.put_0(template.lastKey(), form_0);\n  this.registerAttachable(form_0, stampJavaTypeInfo(getClassLiteralForArray(Lorg_jboss_hal_ballroom_Attachable_2_classLit, 1), {4:1, 1:1, 5:1}, 10, 0, []));\n  return castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo(castTo((new Elements$Builder).section(), 3).h_1(1), 3).textContent_0(type_0), 3).end(), 3).p(), 3).textContent_0(metadata.getDescription_0().getDescription()), 3).end(), 3).add_10(table.asElement_0()), 3).add_10(form_0.asElement_0()), 3).end(), 3).build_2();\n}\n;\n_.setPresenter_2 = function setPresenter_4(presenter){\n  this.presenter = presenter;\n}\n;\n_.update_8 = function update_17(eeData){\n  var defaultBindings, formDefaultBindings, formDeployments, globalModulesList;\n  formDeployments = castTo(this.forms_0.get_3(($clinit_Ids() , EE_ATTRIBUTES_FORM)), 157);\n  formDeployments.view_0(eeData);\n  this.globalModulesTable.api_0().clear();\n  if (eeData.hasDefined('global-modules')) {\n    globalModulesList = eeData.get_17('global-modules').asList_1();\n    $refresh_1($add_0(this.globalModulesTable.api_0(), globalModulesList), ($clinit_Api$RefreshMode() , RESET_0));\n  }\n  if (eeData.hasDefined('service')) {\n    defaultBindings = eeData.get_17('service').get_17('default-bindings');\n    formDefaultBindings = castTo(this.forms_0.get_3(($clinit_Ids() , EE_DEFAULT_BINDINGS_FORM)), 157);\n    formDefaultBindings.view_0(defaultBindings);\n  }\n  this.update_11(eeData, 'context-service', ($clinit_Ids() , EE_CONTEXT_SERVICE));\n  this.update_11(eeData, 'managed-executor-service', ($clinit_Ids() , EE_MANAGED_EXECUTOR));\n  this.update_11(eeData, 'managed-scheduled-executor-service', ($clinit_Ids() , EE_MANAGED_EXECUTOR_SCHEDULED));\n  this.update_11(eeData, 'managed-thread-factory', ($clinit_Ids() , EE_MANAGED_THREAD_FACTORY));\n}\n;\n_.update_11 = function update_18(eeData, resourceType, navigationId){\n  var form_0, models, table;\n  if (eeData.hasDefined(resourceType)) {\n    models = asNamedNodes(eeData.get_17(resourceType).asPropertyList());\n    form_0 = castTo(this.forms_0.get_3(resourceType), 157);\n    form_0.clear_0();\n    table = castTo(this.tables.get_3(resourceType), 43);\n    table.update_24(models);\n    this.navigation.updateBadge(navigationId, models.size_1());\n  }\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEView_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.ee', 'EEView', 1678, Lorg_jboss_hal_core_mvp_HalViewImpl_2_classLit);\nfunction $clinit_EEView$lambda$0$Type(){\n  $clinit_EEView$lambda$0$Type = emptyMethod;\n}\n\nfunction EEView$lambda$0$Type($$outer_0, resources_1){\n  $clinit_EEView$lambda$0$Type();\n  this.$$outer_0 = $$outer_0;\n  this.resources_1 = resources_1;\n}\n\ndefineClass(1679, 1, {1:1}, EEView$lambda$0$Type);\n_.onSave = function onSave_12(arg0, arg1){\n  this.$$outer_0.lambda$0_57(this.resources_1, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEView$lambda$0$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.ee', 'EEView/lambda$0$Type', 1679, Ljava_lang_Object_2_classLit);\nfunction $clinit_EEView$lambda$1$Type(){\n  $clinit_EEView$lambda$1$Type = emptyMethod;\n}\n\nfunction EEView$lambda$1$Type($$outer_0){\n  $clinit_EEView$lambda$1$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4400, $wnd.Function, {1:1}, EEView$lambda$1$Type);\n_.action_4 = function action_7(arg0, arg1){\n  this.$$outer_0.lambda$1_28(arg0, arg1);\n}\n;\nfunction $clinit_EEView$lambda$2$Type(){\n  $clinit_EEView$lambda$2$Type = emptyMethod;\n}\n\nfunction EEView$lambda$2$Type($$outer_0){\n  $clinit_EEView$lambda$2$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4401, $wnd.Function, {1:1}, EEView$lambda$2$Type);\n_.action_4 = function action_8(arg0, arg1){\n  this.$$outer_0.lambda$2_21(arg0, arg1);\n}\n;\nfunction $clinit_EEView$lambda$3$Type(){\n  $clinit_EEView$lambda$3$Type = emptyMethod;\n}\n\nfunction EEView$lambda$3$Type($$outer_0, resources_1){\n  $clinit_EEView$lambda$3$Type();\n  this.$$outer_0 = $$outer_0;\n  this.resources_1 = resources_1;\n}\n\ndefineClass(1680, 1, {1:1}, EEView$lambda$3$Type);\n_.onSave = function onSave_13(arg0, arg1){\n  this.$$outer_0.lambda$3_19(this.resources_1, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEView$lambda$3$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.ee', 'EEView/lambda$3$Type', 1680, Ljava_lang_Object_2_classLit);\nfunction $clinit_EEView$lambda$4$Type(){\n  $clinit_EEView$lambda$4$Type = emptyMethod;\n}\n\nfunction EEView$lambda$4$Type($$outer_0){\n  $clinit_EEView$lambda$4$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1681, 1, {1:1}, EEView$lambda$4$Type);\n_.accept_0 = function accept_62(arg0, arg1){\n  this.$$outer_0.lambda$4_16(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEView$lambda$4$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.ee', 'EEView/lambda$4$Type', 1681, Ljava_lang_Object_2_classLit);\nfunction $clinit_EEView$lambda$5$Type(){\n  $clinit_EEView$lambda$5$Type = emptyMethod;\n}\n\nfunction EEView$lambda$5$Type(){\n  $clinit_EEView$lambda$5$Type();\n}\n\ndefineClass(4402, $wnd.Function, {1:1}, EEView$lambda$5$Type);\n_.render_2 = function render_20(arg0, arg1, arg2, arg3){\n  return lambda$5_16(arg0, arg1, arg2, arg3);\n}\n;\nfunction $clinit_EEView$lambda$6$Type(){\n  $clinit_EEView$lambda$6$Type = emptyMethod;\n}\n\nfunction EEView$lambda$6$Type($$outer_0){\n  $clinit_EEView$lambda$6$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1682, 1, {1:1}, EEView$lambda$6$Type);\n_.execute_10 = function execute_111(arg0, arg1){\n  this.$$outer_0.lambda$6_7(arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEView$lambda$6$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.ee', 'EEView/lambda$6$Type', 1682, Ljava_lang_Object_2_classLit);\nfunction $clinit_EEView$lambda$7$Type(){\n  $clinit_EEView$lambda$7$Type = emptyMethod;\n}\n\nfunction EEView$lambda$7$Type(){\n  $clinit_EEView$lambda$7$Type();\n}\n\ndefineClass(1683, 1, {1:1}, EEView$lambda$7$Type);\n_.apply_2 = function apply_97(arg0){\n  return lambda$7_11(arg0);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEView$lambda$7$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.ee', 'EEView/lambda$7$Type', 1683, Ljava_lang_Object_2_classLit);\nfunction $clinit_EEView$lambda$8$Type(){\n  $clinit_EEView$lambda$8$Type = emptyMethod;\n}\n\nfunction EEView$lambda$8$Type($$outer_0){\n  $clinit_EEView$lambda$8$Type();\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(4403, $wnd.Function, {1:1}, EEView$lambda$8$Type);\n_.execute_0 = function execute_112(){\n  this.$$outer_0.lambda$8_6();\n}\n;\nfunction $clinit_EEView$lambda$9$Type(){\n  $clinit_EEView$lambda$9$Type = emptyMethod;\n}\n\nfunction EEView$lambda$9$Type($$outer_0, template_1, table_2){\n  $clinit_EEView$lambda$9$Type();\n  this.$$outer_0 = $$outer_0;\n  this.template_1 = template_1;\n  this.table_2 = table_2;\n}\n\ndefineClass(1684, 1, {1:1}, EEView$lambda$9$Type);\n_.onSave = function onSave_14(arg0, arg1){\n  this.$$outer_0.lambda$9_5(this.template_1, this.table_2, arg0, arg1);\n}\n;\nvar Lorg_jboss_hal_client_configuration_subsystem_ee_EEView$lambda$9$Type_2_classLit = createForClass('org.jboss.hal.client.configuration.subsystem.ee', 'EEView/lambda$9$Type', 1684, Ljava_lang_Object_2_classLit);\ndefineClass(1086, 1, {1:1});\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$MyView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$MyView$_annotation$$none$$(){\n  var result;\n  result = this.get_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEView$_annotation$$none$$();\n  return result;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$ee$EEPresenter_org$jboss$hal$client$configuration$subsystem$ee$EEPresenter_methodInjection(this.injector.getFragment_com_google_web_bindery_event_shared().get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$MyView$_annotation$$none$$(), this.get_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$MyProxy$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$Finder$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core().get_Key$type$org$jboss$hal$core$CrudOperations$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_finder().get_Key$type$org$jboss$hal$core$finder$FinderPathFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_dmr_dispatch().get_Key$type$org$jboss$hal$dmr$dispatch$Dispatcher$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$StatementContext$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$_annotation$$none$$;\n}\n;\n_.get_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEView$_annotation$$none$$ = function get_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEView$_annotation$$none$$(){\n  var result;\n  if (isNull_0(this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEView$_annotation$$none$$)) {\n    result = this.org$jboss$hal$client$configuration$subsystem$ee$EEView_org$jboss$hal$client$configuration$subsystem$ee$EEView_methodInjection(this.injector.getFragment_org_jboss_hal_meta().get_Key$type$org$jboss$hal$meta$MetadataRegistry$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_core_mbui_table().get_Key$type$org$jboss$hal$core$mbui$table$TableButtonFactory$_annotation$$none$$(), this.injector.getFragment_org_jboss_hal_resources().get_Key$type$org$jboss$hal$resources$Resources$_annotation$$none$$());\n    this.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEView$_annotation$$none$$(result);\n    this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEView$_annotation$$none$$ = result;\n  }\n  return this.singleton_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEView$_annotation$$none$$;\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$_annotation$$none$$(injectee){\n  this.injector.getFragment_com_gwtplatform_mvp_client().com$gwtplatform$mvp$client$HandlerContainerImpl_automaticBind_methodInjection____________(injectee, this.injector.getFragment_com_gwtplatform_mvp_client().get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$());\n}\n;\n_.memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEView$_annotation$$none$$ = function memberInject_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEView$_annotation$$none$$(injectee){\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$ee$EEPresenter_org$jboss$hal$client$configuration$subsystem$ee$EEPresenter_methodInjection = function org$jboss$hal$client$configuration$subsystem$ee$EEPresenter_org$jboss$hal$client$configuration$subsystem$ee$EEPresenter_methodInjection(_0, _1, _2, _3, _4, _5, _6, _7, _8, _9){\n  return new EEPresenter(_0, _1, _2, _3, _4, _5, _6, _7, _8, _9);\n}\n;\n_.org$jboss$hal$client$configuration$subsystem$ee$EEView_org$jboss$hal$client$configuration$subsystem$ee$EEView_methodInjection = function org$jboss$hal$client$configuration$subsystem$ee$EEView_org$jboss$hal$client$configuration$subsystem$ee$EEView_methodInjection(_0, _1, _2){\n  return new EEView(_0, _1, _2);\n}\n;\ndefineClass(1088, 1, {57:1, 1:1});\n_.onSuccess_1 = function onSuccess_82(){\n  this.val$callback2.onSuccess_0(this.this$11.this$01.get_Key$type$org$jboss$hal$client$configuration$subsystem$ee$EEPresenter$_annotation$$none$$());\n}\n;\ndefineClass(1261, 1, {1:1});\n_.save_8 = function save_9(address, changedValues, successMessage, callback){\n  this.save_7(this.operationFactory.fromChangeSet(address, changedValues), successMessage, callback);\n}\n;\ndefineClass(123, 1, {1:1, 128:1});\n_.deploymentAttributes = function deploymentAttributes(){\n  return 'Deployment attributes';\n}\n;\n$entry(onLoad)(16);\n\n//# sourceURL=hal-16.js\n")