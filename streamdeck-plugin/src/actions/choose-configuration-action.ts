/*
 * Copyright 2000-2024 JetBrains s.r.o. and contributors. Use of this source code is governed by the Apache 2.0 license.
 */

import {DefaultAction} from "./default-action";

export class ChooseConfigurationAction extends DefaultAction<ChooseConfigurationAction> {
  actionId(): string {
    return "ChooseRunConfiguration";
  }

  actionTitle():string {
    return "Choose\nConfig";
  }
}
