import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

function Compose() {
  return (
    <React.Fragment>
      <Head>
        <title>Compose Email</title>
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
						<li className="breadcrumb-item active"><a href="/next">Compose</a></li>
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
										<div className="toolbar mb-4" role="toolbar">
											<div className="btn-group mb-1">
												<button type="button" className="btn btn-primary light px-3"><i className="fa fa-archive"></i></button>
												<button type="button" className="btn btn-primary light px-3"><i className="fa fa-exclamation-circle"></i></button>
												<button type="button" className="btn btn-primary light px-3"><i className="fa fa-trash"></i></button>
											</div>
											<div className="btn-group mb-1">
												<button type="button" className="btn btn-primary light dropdown-toggle px-3" data-toggle="dropdown">
													<i className="fa fa-folder"></i> <b className="caret m-l-5"></b>
												</button>
												<div className="dropdown-menu">
													<Link href="/next">
														<a className="dropdown-item">Social</a>
													</Link> 
													<Link href="/next">
														<a className="dropdown-item">Promotions</a>
													</Link> 
													<Link href="/next">
														<a className="dropdown-item">Updates</a>
													</Link>
													<Link href="/next">
														<a className="dropdown-item">Forums</a>
													</Link>
												</div>
											</div>
											<div className="btn-group mb-1">
												<button type="button" className="btn btn-primary light dropdown-toggle px-3" data-toggle="dropdown">
													<i className="fa fa-tag"></i> <b className="caret m-l-5"></b>
												</button>
												<div className="dropdown-menu">
													<Link href="/next">
														<a className="dropdown-item">Social</a>
													</Link> 
													<Link href="/next">
														<a className="dropdown-item">Promotions</a>
													</Link> 
													<Link href="/next">
														<a className="dropdown-item">Updates</a>
													</Link>
													<Link href="/next">
														<a className="dropdown-item">Forums</a>
													</Link>
												</div>
											</div>
											<div className="btn-group mb-1">
												<button type="button" className="btn btn-primary light dropdown-toggle v" data-toggle="dropdown">More <span className="caret m-l-5"></span>
												</button>
												<div className="dropdown-menu">
													<Link href="/link">
														<a className="dropdown-item">Mark as Unread</a>
													</Link>
													<Link href="/link">
														<a className="dropdown-item">Add to Tasks</a>
													</Link>
													<Link href="/link">
														<a className="dropdown-item">Add Star</a> 
													</Link>
													<Link href="/link">
														<a className="dropdown-item">Mute</a>
													</Link>
												</div>
											</div>
										</div>
										<div className="compose-content">
											<form>
												<div className="form-group">
													<input type="text" className="form-control bg-transparent" placeholder=" To:" />
												</div>
												<div className="form-group">
													<input type="text" className="form-control bg-transparent" placeholder=" Subject:" />
												</div>
												<div className="form-group">
													<textarea id="email-compose-editor" className="textarea_editor form-control bg-transparent" rows="15" placeholder="Enter text ..."></textarea>
												</div>
											</form>
											<h5 className="mb-4"><i className="fa fa-paperclip"></i> Attatchment</h5>
											<form className="dropzone dz-clickable">
												<div className="dz-default dz-message">
													<button className="dz-button" type="button">Drop files here to upload</button>
												</div>
											</form>
										</div>
										<div className="text-left mt-4 mb-2">
											<button className="btn btn-primary btn-sl-sm mr-2" type="button"><span className="mr-2"><i className="fa fa-paper-plane"></i></span>Send</button>
											<button className="btn btn-danger light btn-sl-sm" type="button"><span className="mr-2"><i className="fa fa-times" aria-hidden="true"></i></span>Discard</button>
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
        {/* <script src="./assets/js/dropzone.js"></script> */}
      </Script>
    </React.Fragment>
  );
};

export default Compose;
