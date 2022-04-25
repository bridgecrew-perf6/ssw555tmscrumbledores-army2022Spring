import React from "react";
import {
  CanvasPath,
  ExportImageType,
  ReactSketchCanvas,
  ReactSketchCanvasProps,
  ReactSketchCanvasRef,
} from "react-sketch-canvas";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type Handlers = [string, () => void, string][];

interface InputFieldProps {
  fieldName: keyof ReactSketchCanvasProps;
  type?: string;
  canvasProps: Partial<ReactSketchCanvasProps>;
  setCanvasProps: React.Dispatch<
    React.SetStateAction<Partial<ReactSketchCanvasProps>>
  >;
}

function InputField({
  fieldName,
  type = "text",
  canvasProps,
  setCanvasProps,
}: InputFieldProps) {
  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setCanvasProps((prevCanvasProps: Partial<ReactSketchCanvasProps>) => ({
      ...prevCanvasProps,
      [fieldName]: target.value,
    }));
  };

  const id = "validation" + fieldName;

  return (
    <div className="p-2 col-10">
      <label htmlFor={id} className="form-label">
        {fieldName}
      </label>
      <input
        name={fieldName}
        type={type}
        className="form-control"
        id={id}
        value={canvasProps[fieldName] as string}
        onChange={handleChange}
        min={1}
        max={30}
      />
    </div>
  );
}

function Canvas(props: any) {
  const [zoomEnable, setZoomEnable] = React.useState(false);

  let myImg = document.createElement("img");
  myImg.width = 1054;
  myImg.height = 500;
  myImg.src = props.ImageURL;
  console.log(myImg);
  const [canvasProps, setCanvasProps] = React.useState<
    Partial<ReactSketchCanvasProps>
  >({
    className: "react-sketch-canvas",
    width: "" + myImg.width + "px",
    height: "" + myImg.height + "px",
    backgroundImage: String(myImg.src),
    preserveBackgroundImageAspectRatio: "none",
    strokeWidth: 4,
    eraserWidth: 5,
    strokeColor: "#000000",
    canvasColor: "#FFFFFF",
    style: { borderRight: "1px solid #CCC" },
    exportWithBackgroundImage: true,
    withTimestamp: true,
    allowOnlyPointerType: "all",
  });

  const inputProps: Array<[keyof ReactSketchCanvasProps, "text" | "number"]> = [
    // ["className", "text"],
    ["width", "text"],
    ["height", "text"],
    // ["backgroundImage", "text"],
    // ["preserveBackgroundImageAspectRatio", "text"],
    ["strokeWidth", "number"],
    ["eraserWidth", "number"],
  ];

  const canvasRef = React.createRef<ReactSketchCanvasRef>();

  const [dataURI, setDataURI] = React.useState<string>("");
  const [svg, setSVG] = React.useState<string>("");
  const [paths, setPaths] = React.useState<CanvasPath[]>([]);
  const [lastStroke, setLastStroke] = React.useState<{
    stroke: CanvasPath | null;
    isEraser: boolean | null;
  }>({ stroke: null, isEraser: null });
  const [pathsToLoad, setPathsToLoad] = React.useState<string>("");
  const [sketchingTime, setSketchingTime] = React.useState<number>(0);
  const [exportImageType, setexportImageType] =
    React.useState<ExportImageType>("png");

  const imageExportHandler = async () => {
    const exportImage = canvasRef.current?.exportImage;

    if (exportImage) {
      const exportedDataURI = await exportImage(exportImageType);
      setDataURI(exportedDataURI);
      function download(exportedDataURI: string, filename: string) {
        const link = document.createElement("a");
        link.href = exportedDataURI;
        link.download = filename;
        link.click();
      }

      download(exportedDataURI, "image");
    }
  };

  const penHandler = () => {
    const eraseMode = canvasRef.current?.eraseMode;

    if (eraseMode) {
      eraseMode(false);
    }
  };

  const eraserHandler = () => {
    const eraseMode = canvasRef.current?.eraseMode;

    if (eraseMode) {
      eraseMode(true);
    }
  };

  const undoHandler = () => {
    const undo = canvasRef.current?.undo;

    if (undo) {
      undo();
    }
  };

  const redoHandler = () => {
    const redo = canvasRef.current?.redo;

    if (redo) {
      redo();
    }
  };

  const clearHandler = () => {
    canvasProps.backgroundImage = props.ImageURL;
    const clearCanvas = canvasRef.current?.clearCanvas;

    if (clearCanvas) {
      clearCanvas();
    }
  };

  const createButton = (
    label: string,
    handler: () => void,
    themeColor: string
  ) => (
    <button
      key={label}
      className={`btn btn-${themeColor} btn-block`}
      type="button"
      onClick={handler}
    >
      {label}
    </button>
  );
  const zoomCanvasHandler = async () => {
    const exportImage = canvasRef.current?.exportImage;

    if (exportImage) {
      const exportedDataURI = await exportImage(exportImageType);
      canvasProps.backgroundImage = exportedDataURI;
      console.log(canvasProps.backgroundImage);
    }

    setZoomEnable(!zoomEnable);
  };

  const buttonsWithHandlers: Handlers = [
    ["Undo", undoHandler, "primary"],
    ["Redo", redoHandler, "primary"],
    ["Clear All", clearHandler, "primary"],
    ["Zoom", zoomCanvasHandler, "primary"],
    ["Pen", penHandler, "secondary"],
    ["Eraser", eraserHandler, "secondary"],
    ["Export Image", imageExportHandler, "success"],
  ];

  const onChange = (updatedPaths: CanvasPath[]): void => {
    setPaths(updatedPaths);
  };

  return (
    <main className="container-fluid" style={{ backgroundColor: "#c5f1f6" }}>
      <div className="row">
        <aside className="col-3 border-right">
          <header className="my-3">
            <h3 id="Propertiesid1">Properties</h3>
          </header>
          <form className="formCol">
            {inputProps.map(([fieldName, type]) => (
              <InputField
                key={fieldName}
                fieldName={fieldName}
                type={type}
                canvasProps={canvasProps}
                setCanvasProps={setCanvasProps}
              />
            ))}
            <div className="p-2 col-10 d-flex ">
              <div>
                <label
                  id="strokeColorInputid"
                  htmlFor="strokeColorInput"
                  className="form-label"
                >
                  strokeColor
                </label>
                <input
                  type="color"
                  name="strokeColor"
                  className="form-control form-control-color"
                  id="strokeColorInput"
                  value={canvasProps.strokeColor}
                  title="Choose stroke color"
                  onChange={(e) => {
                    setCanvasProps(
                      (prevCanvasProps: Partial<ReactSketchCanvasProps>) => ({
                        ...prevCanvasProps,
                        strokeColor: e.target.value,
                      })
                    );
                  }}
                ></input>
              </div>
              <button
                className="HomeBtn"
                onClick={() => (window.location.href = "/")}
              >
                Home
              </button>
            </div>
            <div className="p-2" hidden>
              <label
                className="form-check-label"
                htmlFor="allowOnlyPointerType"
              >
                allowOnlyPointerType
              </label>
              <div id="allowOnlyPointerType" className="p-2">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="allowPointer"
                    id="allowPointerAll"
                    value="all"
                    checked={canvasProps.allowOnlyPointerType === "all"}
                    onChange={() => {
                      setCanvasProps(
                        (prevCanvasProps: Partial<ReactSketchCanvasProps>) => ({
                          ...prevCanvasProps,
                          allowOnlyPointerType: "all",
                        })
                      );
                    }}
                  />
                  <label className="form-check-label" htmlFor="allowPointerAll">
                    all
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="allowPointer"
                    id="allowPointerTouch"
                    value="touch"
                    checked={canvasProps.allowOnlyPointerType === "touch"}
                    onChange={() => {
                      setCanvasProps(
                        (prevCanvasProps: Partial<ReactSketchCanvasProps>) => ({
                          ...prevCanvasProps,
                          allowOnlyPointerType: "touch",
                        })
                      );
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="allowPointerTouch"
                  >
                    touch
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="allowPointer"
                    id="allowPointerMouse"
                    value="mouse"
                    checked={canvasProps.allowOnlyPointerType === "mouse"}
                    onChange={() => {
                      setCanvasProps(
                        (prevCanvasProps: Partial<ReactSketchCanvasProps>) => ({
                          ...prevCanvasProps,
                          allowOnlyPointerType: "mouse",
                        })
                      );
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="allowPointerMouse"
                  >
                    mouse
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="allowPointer"
                    id="allowPointerPen"
                    value="pen"
                    checked={canvasProps.allowOnlyPointerType === "pen"}
                    onChange={() => {
                      setCanvasProps(
                        (prevCanvasProps: Partial<ReactSketchCanvasProps>) => ({
                          ...prevCanvasProps,
                          allowOnlyPointerType: "pen",
                        })
                      );
                    }}
                  />
                  <label className="form-check-label" htmlFor="allowPointerPen">
                    pen
                  </label>
                </div>
              </div>
              <div className="p-2 col-10">
                <label htmlFor="style" className="form-label">
                  style
                </label>
                <textarea
                  id="style"
                  className="dataURICode col-12"
                  onChange={(event) => {
                    try {
                      const style = JSON.parse(event.target.value);
                      setCanvasProps(
                        (prevCanvasProps: Partial<ReactSketchCanvasProps>) => ({
                          ...prevCanvasProps,
                          style: style,
                        })
                      );
                    } catch {
                      return;
                    }
                  }}
                  rows={5}
                  defaultValue={JSON.stringify(canvasProps.style, null, 2)}
                />
              </div>
              <div className="p-2 col-10">
                <label htmlFor="pathsToLoad" className="form-label">
                  Paths to load
                </label>
                <textarea
                  name="pathsToLoad"
                  id="pathsToLoad"
                  className="dataURICode col-12"
                  rows={5}
                  value={pathsToLoad}
                  onChange={(e) => {
                    setPathsToLoad(e.target.value);
                  }}
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    const pathsToUpdate = JSON.parse(pathsToLoad);

                    canvasRef.current?.loadPaths(pathsToUpdate);
                  }}
                >
                  Load Paths
                </button>
              </div>
            </div>
          </form>
        </aside>
        <section className="col-9">
          <header className="my-3">
            <h3>Canvas</h3>
          </header>
          <section className="row no-gutters canvas-area m-0 p-0">
            <div className="col-9 canvas p-0">
              {zoomEnable ? (
                <TransformWrapper>
                  <TransformComponent>
                    <ReactSketchCanvas
                      ref={canvasRef}
                      onChange={onChange}
                      onStroke={(stroke, isEraser) =>
                        setLastStroke({ stroke, isEraser })
                      }
                      {...canvasProps}
                      style={{ maxHeight: "500px", maxWidth: "100%" }}
                    />
                  </TransformComponent>
                </TransformWrapper>
              ) : (
                <ReactSketchCanvas
                  ref={canvasRef}
                  onChange={onChange}
                  onStroke={(stroke, isEraser) =>
                    setLastStroke({ stroke, isEraser })
                  }
                  {...canvasProps}
                  style={{ maxHeight: "500px", maxWidth: "100%" }}
                />
              )}
            </div>
            <div className="canvasRow panel">
              {buttonsWithHandlers.map(([label, handler, themeColor]) =>
                createButton(label, handler, themeColor)
              )}
            </div>
          </section>

          <section
            hidden
            className="row image-export mt-5 p-3 justify-content-center align-items-start"
          >
            <div className="col-5 row form-group">
              <div className="p-2">
                <label className="col-12" htmlFor="paths">
                  Paths
                </label>
                <textarea
                  id="paths"
                  className="dataURICode col-12"
                  readOnly
                  rows={10}
                  value={
                    paths.length !== 0
                      ? JSON.stringify(paths, null, 2)
                      : "Sketch to get paths"
                  }
                />
              </div>
              <div className="p-2">
                <label className="col-12" htmlFor="last-stroke">
                  Last stroke
                  {lastStroke.isEraser !== null &&
                    ":" + (lastStroke.isEraser ? "Eraser" : "Pen")}
                </label>
                <textarea
                  id="last-stroke"
                  className="dataURICode col-12"
                  readOnly
                  rows={10}
                  value={
                    lastStroke.stroke !== null
                      ? JSON.stringify(lastStroke.stroke, null, 2)
                      : "Sketch to get the last stroke"
                  }
                />
              </div>
            </div>
            <div className="col-5 offset-2">
              <label className="col-12" htmlFor="dataURI">
                Sketching time
              </label>
              <div id="sketchingTime" className="sketchingTime">
                {(sketchingTime / 1000).toFixed(3)} sec
              </div>
            </div>
          </section>

          <section
            hidden
            className="row image-export p-3 justify-content-center align-items-start"
          >
            <div className="col-5 row form-group">
              <label className="col-12" htmlFor="imageDataURI">
                Exported Data URI for imagetype
              </label>
              <textarea
                id="imageDataURI"
                className="dataURICode col-12"
                readOnly
                rows={10}
                value={dataURI || "Click on export image"}
              />
            </div>
            <div className="col-5 offset-2">
              <p>Exported image</p>
              <img
                className="exported-image"
                id="exported-image"
                src={
                  dataURI ||
                  "https://via.placeholder.com/500x250/000000/FFFFFF/?text=Click on export image"
                }
                alt="exported"
              />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default Canvas;
