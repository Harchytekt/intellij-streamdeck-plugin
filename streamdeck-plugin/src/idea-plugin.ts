/*
 * Copyright 2000-2024 JetBrains s.r.o. and contributors. Use of this source code is governed by the Apache 2.0 license.
 */

import {StreamDeckPluginHandler} from 'streamdeck-typescript'
import {ActionIdBrowserAction} from "./actions/action-id-browser-action";
import {DebugAction} from "./actions/debug-action";
import {EmptyAction} from "./actions/empty-action";
import {GitPullAction} from './actions/git-pull-action'
import {NewProjectAction} from './actions/newProject'
import {PauseAction} from "./actions/pause-action";
import {ResumeAction} from "./actions/resume-action";
import {RunAction} from './actions/run-action'
import {SearchEverywhereAction} from "./actions/search-everywhere-action";
import {ShowProjectStructureAction} from "./actions/project-structure-action";
import {StepIntoAction} from "./actions/step-into-action";
import {StepOutAction} from "./actions/step-out-action";
import {StepOverAction} from './actions/step-over-action'
import {StopWithDropDownAction} from "./actions/stop-action";

export class IdeaPlugin extends StreamDeckPluginHandler {
    constructor() {
        super();
        new ActionIdBrowserAction(this, 'com.jetbrains.idea.action.browser');
        new DebugAction(this, "com.jetbrains.idea.debug");
        new EmptyAction(this, 'com.jetbrains.idea.empty.action');
        new GitPullAction(this, 'com.jetbrains.idea.git.pull');
        new NewProjectAction(this, 'com.jetbrains.idea.new');
        new PauseAction(this, 'com.jetbrains.idea.action.pause');
        new ResumeAction(this, 'com.jetbrains.idea.resume');
        new RunAction(this, 'com.jetbrains.idea.run');
        new SearchEverywhereAction(this, 'com.jetbrains.idea.search.everywhere');
        new ShowProjectStructureAction(this, 'com.jetbrains.idea.action.show.project.structure');
        new StepIntoAction(this, 'com.jetbrains.idea.step.into');
        new StepOutAction(this, 'com.jetbrains.idea.action.step.out');
        new StepOverAction(this, 'com.jetbrains.idea.step.over');
        new StopWithDropDownAction(this, 'com.jetbrains.idea.action.stop');
    }
}

new IdeaPlugin()
