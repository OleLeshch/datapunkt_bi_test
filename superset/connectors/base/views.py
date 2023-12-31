# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
from typing import Any

from flask import Markup
from flask_appbuilder.fieldwidgets import BS3TextFieldWidget

from superset.connectors.base.models import BaseDatasource
from superset.exceptions import SupersetException
from superset.views.base import SupersetModelView


class BS3TextFieldROWidget(  # pylint: disable=too-few-public-methods
    BS3TextFieldWidget
):
    """
    Custom read only text field widget.
    """

    def __call__(self, field: Any, **kwargs: Any) -> Markup:
        kwargs["readonly"] = "true"
        return super().__call__(field, **kwargs)


class DatasourceModelView(SupersetModelView):
    def pre_delete(self, item: BaseDatasource) -> None:
        if item.slices:
            raise SupersetException(
                Markup(
                    "Cannot delete a datasource that has slices attached to it."
                    "Here's the list of associated charts: "
                    + "".join([i.slice_name for i in item.slices])
                )
            )
