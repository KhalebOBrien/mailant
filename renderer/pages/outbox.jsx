import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

function Outbox() {
  return (
    <React.Fragment>
      <Head>
        <title>Outbox</title>
      </Head>

      <div id="main-wrapper" className="show">
        <div className="content-body" style={{minHeight:100+'vh'}}>
          <div className="container-fluid">
				<div className="modal fade" id="addOrderModalside">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Add Event</h5>
								<button type="button" className="close" data-dismiss="modal"><span>×</span></button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label className="text-black font-w500">Event Name</label>
										<input type="text" className="form-control" />
									</div>
									<div className="form-group">
										<label className="text-black font-w500">Event Date</label>
										<input type="date" className="form-control" />
									</div>
									<div className="form-group">
										<label className="text-black font-w500">Description</label>
										<input type="text" className="form-control" />
									</div>
									<div className="form-group">
										<button type="button" className="btn btn-primary">Create</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
        <div className="page-titles">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a href="/next">Email</a></li>
						<li className="breadcrumb-item active"><a href="/next">Outbox</a></li>
					</ol>
        </div>
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-body">
									<div className="email-left-box px-0 mb-3">
										<div className="p-0">
											<Link href="/compose">
												<a className="btn btn-primary btn-block">Compose</a>
											</Link>
										</div>
										<div className="mail-list mt-4">
											<Link href="/read">
												<a className="list-group-item active">
													<i className="fa fa-inbox font-18 align-middle mr-2"></i> Inbox <span className="badge badge-primary badge-sm text-white float-right">198</span>
												</a>
											</Link>
											<Link href="/outbox">
												<a className="list-group-item">
													<i className="fa fa-paper-plane font-18 align-middle mr-2"></i>Outbox <span className="badge badge-primary badge-sm text-white float-right">198</span>
												</a>
											</Link>
											<Link href="/compose">
												<a className="list-group-item">
													<i className="fa fa-star-o font-18 align-middle mr-2"></i>Important <span className="badge badge-danger text-white badge-sm float-right">47</span>
												</a>
											</Link>
											<Link href="/compose">
												<a className="list-group-item">
													<i className="mdi mdi-file-document-box font-18 align-middle mr-2"></i>Draft
												</a>
											</Link>
											<Link href="/compose">
												<a className="list-group-item">
													<i className="fa fa-trash font-18 align-middle mr-2"></i>Trash
												</a>
											</Link>
										</div>
										<div className="intro-title d-flex justify-content-between">
											<h5>Categories</h5>
											<i className="fa fa-chevron-down" aria-hidden="true"></i>
										</div>
										<div className="mail-list mt-4">
											<Link href="/next">
												<a className="list-group-item">
												<span className="icon-warning">
													<i className="fa fa-circle" aria-hidden="true"></i>
												</span>	Work 
												</a>
											</Link>
											<Link href="/next">
												<a className="list-group-item">
												<span className="icon-primary">
													<i className="fa fa-circle" aria-hidden="true"></i>
												</span>	Private 
												</a>
											</Link>
											<Link href="/next">
												<a className="list-group-item">
												<span className="icon-success">
													<i className="fa fa-circle" aria-hidden="true"></i>
												</span>	Support 
												</a>
											</Link>
											<Link href="/next">
												<a className="list-group-item">
												<span className="icon-dpink">
													<i className="fa fa-circle" aria-hidden="true"></i>
												</span>	Social 
												</a>
											</Link>
										</div>
									</div>
									<div className="email-right-box ml-0 ml-sm-4 ml-sm-0">
                    <div role="toolbar" className="toolbar ml-1 ml-sm-0">
                      <div className="btn-group mb-1">
                        <div className="custom-control custom-checkbox pl-2">
                          <input type="checkbox" className="custom-control-input" id="checkAll" />
                          <label className="custom-control-label" for="checkAll"></label>
                        </div>
                      </div>
                      <div className="btn-group mb-1">
                        <button className="btn btn-primary light px-3" type="button"><i className="ti-reload"></i>
                        </button>
                      </div>
                      <div className="btn-group mb-1">
                        <button aria-expanded="false" data-toggle="dropdown" className="btn btn-primary px-3 light dropdown-toggle" type="button">More <span className="caret"></span>
                        </button>
                        <div className="dropdown-menu">
                          <Link href="/next">
                            <a className="dropdown-item">Mark as Unread</a>
                          </Link>
                          <Link href="/next">
                            <a className="dropdown-item">Add to Tasks</a>
                          </Link>
                          <Link href="/next">
                            <a className="dropdown-item">Add Star</a>
                          </Link>
                          <Link href="/next">
                            <a className="dropdown-item">Mute</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="email-list mt-3">
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="pl-1 align-self-center">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="checkbox2" />
                                <label className="custom-control-label" for="checkbox2"></label>
                              </div>
                            </div>
                            <div className="ml-2">
                              <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true"></i></button>
                            </div>
                          </div>
                          <Link href="/read">
                            <a className="col-mail col-mail-2">
                              <div className="subject">Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture</div>
                              <div className="date">11:49 am</div>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="pl-1 align-self-center">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="checkbox3" />
                                <label className="custom-control-label" for="checkbox3"></label>
                              </div>
                            </div>
                            <div className="ml-2">
                              <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true"></i></button>
                            </div>
                          </div>
                          <Link href="/read">
                            <a className="col-mail col-mail-2">
                              <div className="subject">Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</div>
                              <div className="date">11:49 am</div>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="pl-1 align-self-center">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="checkbox4" />
                                <label className="custom-control-label" for="checkbox4"></label>
                              </div>
                            </div>
                            <div className="ml-2">
                              <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true"></i></button>
                            </div>
                          </div>
                          <Link href="/read">
                            <a className="col-mail col-mail-2">
                              <div className="subject">Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div>
                              <div className="date">11:49 am</div>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="message">
                        <div>
                          <div className="d-flex message-single">
                            <div className="pl-1 align-self-center">
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="checkbox21" />
                                <label className="custom-control-label" for="checkbox21"></label>
                              </div>
                            </div>
                            <div className="ml-2">
                              <button className="border-0 bg-transparent align-middle p-0"><i className="fa fa-star" aria-hidden="true"></i></button>
                            </div>
                          </div>
                          <Link href="/read">
                            <a className="col-mail col-mail-2">
                              <div className="subject">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of</div>
                              <div className="date">11:49 am</div>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12 pl-3">
                        <nav>
                          <ul className="pagination pagination-gutter pagination-primary pagination-sm no-bg">
                            <li className="page-item page-indicator">
                              <Link href="/link">
                                <a className="page-link"><i className="la la-angle-left"></i></a>
                              </Link>
                            </li>
                            <li className="page-item ">
                              <Link href="/link">
                                <a className="page-link">1</a>
                              </Link>
                            </li>
                            <li className="page-item active">
                              <Link href="/link">
                                <a className="page-link">2</a>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link href="/link">
                                <a className="page-link">3</a>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link href="/link">
                                <a className="page-link">4</a>
                              </Link>
                            </li>
                            <li className="page-item page-indicator">
                              <Link href="/link">
                                <a className="page-link"><i className="la la-angle-right"></i></a>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        </div>
        <div className="footer">
					<div className="copyright">
						<p>Copyright &copy; <Link href="/next"><a href="/next" target="_blank">MailAnt</a></Link> 2023</p>
					</div>
        </div>
    	</div>

      <Script>
        {/* <script src="./assets/js/global.min.js"></script> */}
        {/* <script src="./assets/js/bootstrap-select.min.js"></script> */}
      </Script>
    </React.Fragment>
  );
};

export default Outbox;
