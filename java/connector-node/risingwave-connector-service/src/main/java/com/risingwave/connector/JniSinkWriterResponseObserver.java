// Copyright 2023 RisingWave Labs
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.risingwave.connector;

import com.risingwave.java.binding.Binding;
import com.risingwave.proto.ConnectorServiceProto;
import io.grpc.stub.StreamObserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class JniSinkWriterResponseObserver
        implements StreamObserver<ConnectorServiceProto.SinkWriterStreamResponse> {
    private static final Logger LOG = LoggerFactory.getLogger(JniSinkWriterResponseObserver.class);
    private long responseTxPtr;

    private boolean success;

    public JniSinkWriterResponseObserver(long responseTxPtr) {
        this.responseTxPtr = responseTxPtr;
    }

    @Override
    public void onNext(ConnectorServiceProto.SinkWriterStreamResponse response) {
        this.success =
                Binding.sendSinkWriterResponseToChannel(this.responseTxPtr, response.toByteArray());
    }

    @Override
    public void onError(Throwable throwable) {
        LOG.error("JniSinkWriterHandler onError: ", throwable);
    }

    @Override
    public void onCompleted() {
        LOG.info("JniSinkWriterHandler onCompleted");
    }

    public boolean isSuccess() {
        return success;
    }
}
