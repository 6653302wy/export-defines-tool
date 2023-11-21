import { Button, Divider, Form, Input } from '@arco-design/web-react';
import { open } from '@tauri-apps/api/dialog';
import { downloadDir } from '@tauri-apps/api/path';
import { FunctionComponent, ReactElement, useCallback, useEffect, useState } from 'react';
import { Parser } from '../../../../utils/Parser';

const parser = new Parser();
const cacheData = localStorage.getItem('cache');
interface FormInfo {
    outputDir: string;
    jsonUrl: string;
}
export const Generate: FunctionComponent = (): ReactElement => {
    const [initialStates, setinitialStates] = useState<FormInfo>({
        outputDir: cacheData ? JSON.parse(cacheData)?.outputDir : '',
        jsonUrl: cacheData ? JSON.parse(cacheData)?.jsonUrl : '',
    });
    const [form] = Form.useForm();

    const onSaveOutputDir = useCallback(async () => {
        const filePath = await open({
            directory: true,
            multiple: false,
            title: '请选择文件导出目录',
            defaultPath: await downloadDir(),
        });
        form.setFieldValue('outputDir', filePath || '');
    }, [form]);

    const setDownloadDir = useCallback(async () => {
        form.setFieldValue('outputDir', await downloadDir());
    }, [form]);

    useEffect(() => {
        setDownloadDir();
    }, [setDownloadDir]);

    return (
        <div className="">
            <p className="text-[--color-text-1] text-[16px] font-medium">生成代码文件</p>
            <Divider />

            <Form
                form={form}
                onValuesChange={(_, values) => {
                    // console.log('onValuesChange: ', values);
                    localStorage.setItem('cache', JSON.stringify(values));
                    setinitialStates(values as FormInfo);
                }}
                onSubmit={() => {
                    // console.log('onSubmit', form.getFields());
                    parser.start(form.getFieldValue('jsonUrl'));
                }}
                initialValues={initialStates}
                scrollToFirstError
            >
                <Form.Item
                    label="导出目录"
                    // rules={[{ required: true }]}
                    field="outputDir"
                    className="flex items-center"
                >
                    <Input style={{ width: 420 }} value={initialStates.outputDir} className=" mr-2 " />
                    <Button onClick={onSaveOutputDir}>浏览</Button>
                </Form.Item>

                <Form.Item label="JSON URL:">
                    <Input
                        style={{ width: 420 }}
                        className=" mr-2 "
                        onChange={(value) => form.setFieldValue('jsonUrl', value)}
                        value={initialStates.jsonUrl}
                    />
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        生成代码
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

Generate.displayName = 'Generate';
